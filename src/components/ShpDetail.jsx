import { useEffect, useState } from "react";
import "./Detail.css"
import PagenationComponent from "./PagenationComponent";
import FilSearch from "./FilSearch";
import FavAlert from "./FavAlert";
import { useNavigate } from "react-router-dom";

function ShpDetail() {
    // 쇼핑몰 데이터 스테이트
    const [shpData, setShpData] = useState([]);
    // 페이지네이션 스테이트
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // 필터 데이터를 새로 저장할 스테이트
    const [filteredData, setFilteredData] = useState([]);
    // 필터 기능 스테이트
    const [selectedDistrict, setSelectedDistrict] = useState('구전체');
    // 검색기능 스테이트
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const shpItems = data.slice(142, 154)
            setShpData(shpItems);
            setFilteredData(shpItems);
        }
    }, []);

    useEffect(()=>{
        const filterSearchData = () => {
            let updatedData = shpData;
            // 선택된 데이터가 구전체가 아니라면 선택된 구가 포함된 주소값을 얻어온다.
            if(selectedDistrict !== '구전체'){
                updatedData = updatedData.filter(item => item.shppgAddr.includes(selectedDistrict));
            }
            // 검색된 값의 이름이 toursopotNm에 포함되어 있다면 데이터 얻어오기
            if(searchTerm){
                updatedData = updatedData.filter(item => item.shppgNm.includes(searchTerm));
            }
            // 필터링된 데이터를 setFilteredData 에 저장
            setFilteredData(updatedData);
            // 페이지를 1번 페이지로 초기화
            setCurrentPage(1);
        };
        // filterSearchData함수를 호출
        filterSearchData();
        // 아래 3개의 데이터 값이 변경 될때마다 useEffect 발동
    },[searchTerm,selectedDistrict,shpData]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 담기버튼을 눌렀을 때 로컬스토리지에 따로 즐겨찾기로 저장하는 함수
    const addFavorite = (item) => {
        const existingFavorites = JSON.parse(localStorage.getItem("shpFavorites")) || [];
        const updatedFavorites = [...existingFavorites, item];
        localStorage.setItem("shpFavorites", JSON.stringify(updatedFavorites))
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
                    currentItems.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.shppgNm}</div>
                                    <div className="detail_address">주소 : {item.shppgAddr}</div>
                                </div>
                                <div className="detail_btn">
                                    <FavAlert item={item} onConfirm={addFavorite}/>
                                    <button className="detail_view_btn" onClick={()=>detailChange(item)}>상세보기</button>
                                </div>
                            </div>
                        </div>
                    ))
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

export default ShpDetail;