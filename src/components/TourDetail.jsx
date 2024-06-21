import { useEffect, useState } from "react";
import "./Detail.css"
import PagenationComponent from "./PagenationComponent";
import FilSearch from "./FilSearch";
import FavAlert from "./FavAlert";
import { useNavigate } from "react-router-dom";

function TourDetail(){
    // 관광지 데이터
    const [tourData, setTourData] = useState([]);
    // 페이지네이션 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // 필터 데이터를 새로 저장할 스테이트
    const [filteredData, setFilteredData] = useState([]);
    // 필터 기능 스테이트
    const [selectedDistrict, setSelectedDistrict] = useState('구전체');
    // 검색기능 스테이트
    const [searchTerm, setSearchTerm] = useState('');
    // 즐겨찾기 데이터
    const [, setFavorites] = useState([]);

    useEffect(() => {
        try {
            const initialData = [
                { tourspotNm: "Sample Spot 1", tourspotAddr: "Sample Address 1", tourspotSumm: "Sample Summary 1" },
                { tourspotNm: "Sample Spot 2", tourspotAddr: "Sample Address 2", tourspotSumm: "Sample Summary 2" }
            ];
            localStorage.setItem("data", JSON.stringify(initialData));
            console.log("Initial data set in localStorage:", initialData);
        } catch (error) {
            console.error("Error setting initial data in localStorage:", error);
        }
    }, []);


    useEffect(()=>{
        try {
            const data = JSON.parse(localStorage.getItem("data"));
            if (data) {
                const tourItems = data.slice(0, 142);
                setTourData(tourItems);
                setFilteredData(tourItems);
                console.log("Data loaded from localStorage:", tourItems);
            } else {
                console.log("No data found in localStorage");
            }
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
        }
    },[]);

    useEffect(()=>{
        const filterSearchData = ()=>{
            let updatedData = tourData;
            // 선택된 데이터가 구전체가 아니라면 선택된 구가 포함된 주소값을 얻어온다.
            if(selectedDistrict !== '구전체'){
                updatedData = updatedData.filter(item=> item.tourspotAddr.includes(selectedDistrict));
            }
            // 검색된 값의 이름이 toursopotNm에 포함되어 있다면 데이터 얻어오기
            if(searchTerm){
                updatedData = updatedData.filter(item=> item.tourspotNm.includes(searchTerm));
            }
            // 필터링된 데이터를 setFilteredData 에 저장
            setFilteredData(updatedData);
            // 페이지를 1번 페이지로 초기화
            setCurrentPage(1);
        };
        // filterSearchData함수를 호출
        filterSearchData();
        // 아래 3개의 데이터 값이 변경 될때마다 useEffect 발동
    },[searchTerm,selectedDistrict,tourData]);

    // 컴포넌트가 업데이트 될 때마다 즐겨찾기 데이터 업데이트 시키기
    useEffect(()=>{
        try {
            const existingFavorites = JSON.parse(localStorage.getItem("tourFavorites")) || [];
            setFavorites(existingFavorites);
        } catch (error) {
            console.error("Error parsing localStorage favorites:", error);
        }
    },[]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    // 담기버튼을 눌렀을 때 로컬스토리지에 따로 즐겨찾기로 저장하는 함수
    const addFavorite = (item) => {
        if (item) {
            try {
                const existingFavorites = JSON.parse(localStorage.getItem("tourFavorites")) || [];
                const updatedFavorites = [...existingFavorites, item];
                localStorage.setItem("tourFavorites", JSON.stringify(updatedFavorites));
                setFavorites(updatedFavorites);
            } catch (error) {
                console.error("Error updating localStorage favorites:", error);
            }
        }
    };

    // 상세보기 버튼을 눌렀을 때 디테일 페이지로 이동
    const navigate = useNavigate();
    const detailChange = (item) => {
        navigate(`/detail`,{state:{item}})
    };


    return(
        <div>
            <FilSearch
                setSearchTerm={setSearchTerm}
                setSelectedDistrict={setSelectedDistrict}
                showCategoryFilter={false}
            />
            <div className="detail_wrapper">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => {
                        const existingFavorites = JSON.parse(localStorage.getItem("tourFavorites")) || [];
                        const isAlreadyFavorited = existingFavorites.some(fav => fav.tourspotNm === item.tourspotNm);
                        return(
                            <div key={index} className="detail_container">
                                <div className="detail_item">
                                    <div className="text_container">
                                        <div className="detail_name">장소명 : {item.tourspotNm}</div>
                                        <div className="detail_address">주소 : {item.tourspotAddr}</div>
                                        <div className="detail_description">설명 : {item.tourspotSumm}</div>
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

export default TourDetail;