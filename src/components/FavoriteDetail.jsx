import { useEffect, useState } from 'react';
import './Detail.css'
import FilSearch from './FilSearch';
import PagenationComponent from './PagenationComponent';



function FavoriteDetail() {
    // 관광지 즐겨찾기 데이터
    const [tourFavoriteData, setTourFavoriteData] = useState([]);
    // 쇼핑몰 즐겨찾기 데이터
    const [shpFavoriteData, setShpFavoriteData] = useState([]);
    // 음식점 즐겨찾기 데이터
    const [foodFavoriteData, setFoodFavoriteData] = useState([]);
    // 숙박시설 즐겨찾기 데이터
    const [hotelFavoriteData, setHotelFavoriteData] = useState([]);

    // 페이지네이션
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // 필터 데이터를 새로 저장할 스테이트
    const [filteredTourData, setFilteredTourData] = useState([]);
    const [filteredShpData, setFilteredShpData] = useState([]);
    const [filteredHotelData, setFilteredHotelData] = useState([]);
    const [filteredFoodData, setFilteredFoodData] = useState([]);
    // 필터 기능 스테이트
    const [selectedDistrict, setSelectedDistrict] = useState('구전체');
    // 검색기능 스테이트
    const [searchTerm, setSearchTerm] = useState('');

    // 로컬스토리지에 저장되어 있는 각 즐겨찾기 목록을 가져오는 기능
    useEffect(()=>{
        const tourFavs = JSON.parse(localStorage.getItem("tourFavorites"));
        const shpFavs = JSON.parse(localStorage.getItem("shpFavorites"));
        const hotelFavs = JSON.parse(localStorage.getItem("hotelFavorites"));
        const foodFavs = JSON.parse(localStorage.getItem("foodFavorites"));
        if(tourFavs){
            setTourFavoriteData(tourFavs);
            setFilteredTourData(tourFavs);
        }
        if(shpFavs){
            setShpFavoriteData(shpFavs);
            setFilteredShpData(shpFavs);
        }
        if(hotelFavs){
            setHotelFavoriteData(hotelFavs);
            setFilteredHotelData(hotelFavs);
        }
        if(foodFavs){
            setFoodFavoriteData(foodFavs);
            setFilteredFoodData(foodFavs);
        }
    },[]);

    // 필터 및 검색 기능 
    useEffect(()=>{
        const filterSearchData = () => {
            let updatedTourData = tourFavoriteData;
            let updatedShpData = shpFavoriteData;
            let updatedHotelData = hotelFavoriteData;
            let updatedFoodData = foodFavoriteData;
            // 선택된 데이터가 구전체가 아니라면 선택된 구가 포함된 주소값 얻어오기
            if(selectedDistrict !== '구전체'){
                updatedTourData = updatedTourData.filter(item => item.tourspotAddr.includes(selectedDistrict));
                updatedFoodData = updatedFoodData.filter(item => item.restrntAddr.includes(selectedDistrict));
                updatedHotelData = updatedHotelData.filter(item => item.romsAddr.includes(selectedDistrict));
                updatedShpData = updatedShpData.filter(item => item.shppgAddr.includes(selectedDistrict));
            }
            // 검색된 값의 이름이 각 이름에 포함되어 있다면 데이터 얻어오기
            if (searchTerm) {
                updatedTourData = updatedTourData.filter(item => item.tourspotNm.includes(searchTerm));
                updatedFoodData = updatedFoodData.filter(item => item.restrntNm.includes(searchTerm));
                updatedHotelData = updatedHotelData.filter(item => item.romsNm.includes(searchTerm));
                updatedShpData = updatedShpData.filter(item => item.shppgNm.includes(searchTerm));
            }
            // 필터링된 데이터를 setFilteredData 에 저장
            setFilteredTourData(updatedTourData);
            setFilteredFoodData(updatedFoodData);
            setFilteredHotelData(updatedHotelData);
            setFilteredShpData(updatedShpData);
            // 페이지를 1번 페이지로 초기화
            setCurrentPage(1);
        };
        // filterSearchData함수를 호출
        filterSearchData();
        // 아래 3개의 데이터 값이 변경 될때마다 useEffect 발동
    },[searchTerm, selectedDistrict, tourFavoriteData, shpFavoriteData, foodFavoriteData, hotelFavoriteData]);

    // 페이지네이션 설정
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTourItems = filteredTourData.slice(indexOfFirstItem, indexOfLastItem);
    const currentFoodItems = filteredFoodData.slice(indexOfFirstItem, indexOfLastItem);
    const currentHotelItems = filteredHotelData.slice(indexOfFirstItem, indexOfLastItem);
    const currentShpItems = filteredShpData. slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil((filteredTourData.length + filteredFoodData.length + filteredHotelData.length + filteredShpData.length) / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <FilSearch
                setSearchTerm={setSearchTerm}
                setSelectedDistrict={setSelectedDistrict}
            />
            <div className="detail_wrapper">
                <h2>관광지 즐겨찾기</h2>
                {currentTourItems.length > 0 ? (
                    currentTourItems.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.tourspotNm}</div>
                                    <div className="detail_address">주소 : {item.tourspotAddr}</div>
                                    <div className="detail_description">설명 : {item.tourspotSumm}</div>
                                </div>
                                <div className="detail_btn">
                                    <button className="detail_view_btn">상세보기</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>관광지 즐겨찾기가 없습니다.</div>
                )}
                <h2>음식점 즐겨찾기</h2>
                {currentFoodItems.length > 0 ? (
                    currentFoodItems.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.restrntNm}</div>
                                    <div className="detail_address">주소 : {item.restrntAddr}</div>
                                    <div className="detail_description">설명 : {item.restrntSumm}</div>
                                </div>
                                <div className="detail_btn">
                                    <button className="detail_view_btn">상세보기</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>음식점 즐겨찾기가 없습니다.</div>
                )}
                <h2>숙박시설 즐겨찾기</h2>
                {currentHotelItems.length > 0 ? (
                    currentHotelItems.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.romsNm}</div>
                                    <div className="detail_address">주소 : {item.romsAddr}</div>
                                    <div className="detail_description">설명 : {item.romsSumm}</div>
                                </div>
                                <div className="detail_btn">
                                    <button className="detail_view_btn">상세보기</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>숙박시설 즐겨찾기가 없습니다.</div>
                )}
                <h2>쇼핑몰 즐겨찾기</h2>
                {currentShpItems.length > 0 ? (
                    currentShpItems.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.shppgNm}</div>
                                    <div className="detail_address">주소 : {item.shppgAddr}</div>
                                    <div className="detail_description">설명 : {item.shppgSumm}</div>
                                </div>
                                <div className="detail_btn">
                                    <button className="detail_view_btn">상세보기</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>쇼핑몰 즐겨찾기가 없습니다.</div>
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

export default FavoriteDetail;


