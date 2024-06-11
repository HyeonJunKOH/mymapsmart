import { useEffect, useState } from "react";
import "./Detail.css"
import PagenationComponent from "./PagenationComponent";
import FilSearch from "./FilSearch";

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

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const tourItems = data.slice(0,142)
            setTourData(tourItems);
            setFilteredData(tourItems);
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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div>
            <FilSearch
                setSearchTerm={setSearchTerm}
                setSelectedDistrict={setSelectedDistrict}
            />
            <div className="detail_wrapper">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.tourspotNm}</div>
                                    <div className="detail_address">주소 : {item.tourspotAddr}</div>
                                    <div className="detail_description">설명 : {item.tourspotSumm}</div>
                                </div>
                                <div className="detail_btn">
                                    <button className="detail_favorite_btn">담기</button>
                                    <button className="detail_view_btn">상세보기</button>
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

export default TourDetail;