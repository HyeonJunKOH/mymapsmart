import { useEffect, useState } from "react";
import "./Detail.css"
import PagenationComponent from "./PagenationComponent";
import FilSearch from "./FilSearch";
import FavAlert from "./FavAlert";
import { useNavigate } from "react-router-dom";



function FoodDetail() {
    // 푸드데이터 스테이트
    const [foodData, setFoodData] = useState([]);
    // 페이지네이션 스테이트
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // 검색기능 스테이트
    const [searchTerm, setSearchTerm] = useState('');
    // 필터기능 스테이트
    const [selectedDistrict, setSelectedDistrict] = useState('구전체');
    // 필터 및 검색 값을 저장할 스테이트
    const [filteredData, setFilteredData] = useState([]);
    // 즐겨찾기 
    const [,setFavorites] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const foodItems = data.slice(154, 275)
            setFoodData(foodItems);
            setFilteredData(foodItems);
        }
    }, []);

    useEffect(() => {
        const filSearchData = () => {
            let updatedData = foodData;
            // 선택된 데이터가 구 전체가 아니라면 선택된 데이터 값 얻어오기
            if(selectedDistrict !== '구전체'){
                updatedData = updatedData.filter(item => item.restrntAddr.includes(selectedDistrict));
            }
            // 검색된 값이 주소에 포함 되어 있다면 선택된 값 얻어오기
            if(searchTerm){
                updatedData = updatedData.filter(item => item.restrntNm.includes(searchTerm));
            }
            // 필터 및 검색된 값 저장하기
            setFilteredData(updatedData);
            // 현재 페이지를 1페이지로 초기화
            setCurrentPage(1);
        }
        // filSearchData 함수 호출
        filSearchData();
        // searchTerm, selectedDistrict, foodData 가 호출될때마다 이펙트 발동
    },[searchTerm, selectedDistrict, foodData]);

    // 컴포넌트가 업데이트 될 때마다 즐겨찾기 데이터 업데이트 시키기
    useEffect(()=>{
        const existingFavorites = JSON.parse(localStorage.getItem("foodFavorites"))||[];
        setFavorites(existingFavorites);
    },[filteredData]);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 담기버튼을 눌렀을 때 로컬스토리지에 따로 즐겨찾기로 저장하는 함수
    const addFavorite = (item) => {
        const existingFavorites = JSON.parse(localStorage.getItem("foodFavorites")) || [];
        const updatedFavorites = [...existingFavorites, item];
        localStorage.setItem("foodFavorites", JSON.stringify(updatedFavorites))
        setFavorites(updatedFavorites); //즐겨찾기 상태 업데이트
    };

    // 상세보기 버튼을 눌렀을 때 디테일 페이지로 이동
    const navigate = useNavigate();
    const detailChange = (item) => {
        navigate(`/detail`, { state: { item } })
    };

    return (
        <div>
            <FilSearch
                setSearchTerm={setSearchTerm}
                setSelectedDistrict={setSelectedDistrict}
                showCategoryFilter={false}
            />
            <div className="detail_wrapper">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => {
                        const existingFavorites = JSON.parse(localStorage.getItem("foodFavorites")) || [];
                        const isAlreadyFavorited = existingFavorites.some(fav => fav.restrntNm === item.restrntNm);
                        return(
                            <div key={index} className="detail_container">
                                <div className="detail_item">
                                    <div className="text_container">
                                        <div className="detail_name">장소명 : {item.restrntNm}</div>
                                        <div className="detail_address">주소 : {item.restrntAddr}</div>
                                        <div className="detail_description">설명 : {item.restrntSumm}</div>
                                    </div>
                                    <div className="detail_btn">
                                        <FavAlert item={item} onConfirm={addFavorite} unConfirm={!isAlreadyFavorited} />
                                        <button className="detail_view_btn" onClick={() => detailChange(item)}>상세보기</button>
                                    </div>
                                </div>
                            </div>
                        );
                })
                ) : (
                    <div>Loading...</div>
                )}
                <PagenationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>    
    );
}

export default FoodDetail;