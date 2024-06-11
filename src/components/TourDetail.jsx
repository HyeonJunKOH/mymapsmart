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
    // 필터기능
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('구전체');
    // 검색기능
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

            if(selectedDistrict !== '구전체'){
                updatedData = updatedData.filter(item=> item.tourspotAddr.includes(selectedDistrict));
            }
            if(searchTerm){
                updatedData = updatedData.filter(item=> item.tourspotNm.includes(searchTerm));
            }
            setFilteredData(updatedData);
            setCurrentPage(1);
        };
        filterSearchData();
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