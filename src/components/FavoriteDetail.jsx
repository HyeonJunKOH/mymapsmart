import { useEffect, useState } from 'react';
import './Detail.css'
import FilSearch from './FilSearch';
import PagenationComponent from './PagenationComponent';
import DelAlert from './DelAlert';


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
    // 카테고리 기능 스테이트
    const [selectedCategory, setSelectedCategory] = useState('카테고리 전체');

    // 로컬스토리지에서 데이터 초기화
    useEffect(() => {
        const tourFavs = JSON.parse(localStorage.getItem("tourFavorites")) || [];
        const shpFavs = JSON.parse(localStorage.getItem("shpFavorites")) || [];
        const hotelFavs = JSON.parse(localStorage.getItem("hotelFavorites")) || [];
        const foodFavs = JSON.parse(localStorage.getItem("foodFavorites")) || [];

        setTourFavoriteData(tourFavs);
        setShpFavoriteData(shpFavs);
        setHotelFavoriteData(hotelFavs);
        setFoodFavoriteData(foodFavs);

        setFilteredTourData(tourFavs);
        setFilteredShpData(shpFavs);
        setFilteredHotelData(hotelFavs);
        setFilteredFoodData(foodFavs);
    }, []);

    // 필터 및 검색 기능 
    useEffect(()=>{
        const filterSearchData = () => {
            let updatedTourData = [...tourFavoriteData];
            let updatedShpData = [...shpFavoriteData];
            let updatedHotelData = [...hotelFavoriteData];
            let updatedFoodData = [...foodFavoriteData];
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
            // 카테고리 필터링
            switch (selectedCategory) {
                case 'tourFavorites':
                    setFilteredTourData(tourFavoriteData);
                    setFilteredShpData([]);
                    setFilteredHotelData([]);
                    setFilteredFoodData([]);
                    break;
                case 'foodFavorites':
                    setFilteredTourData([]);
                    setFilteredShpData([]);
                    setFilteredHotelData([]);
                    setFilteredFoodData(foodFavoriteData);
                    break;
                case 'hotelFavorites':
                    setFilteredTourData([]);
                    setFilteredShpData([]);
                    setFilteredHotelData(hotelFavoriteData);
                    setFilteredFoodData([]);
                    break;
                case 'shpFavorites':
                    setFilteredTourData([]);
                    setFilteredShpData(shpFavoriteData);
                    setFilteredHotelData([]);
                    setFilteredFoodData([]);
                    break;
                default:
                    // 전체 카테고리일 경우 모든 데이터 통합
                    setFilteredTourData(updatedTourData);
                    setFilteredFoodData(updatedFoodData);
                    setFilteredHotelData(updatedHotelData);
                    setFilteredShpData(updatedShpData);
                    break;
            }
            // 페이지를 1번 페이지로 초기화
            setCurrentPage(1);
        };
        // filterSearchData함수를 호출
        filterSearchData();
        // 아래 3개의 데이터 값이 변경 될때마다 useEffect 발동
    },[searchTerm, selectedDistrict, tourFavoriteData, shpFavoriteData, foodFavoriteData, hotelFavoriteData, setSelectedCategory, selectedCategory]);

    // 페이지네이션 설정
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const allFavorites = [...filteredTourData, ...filteredFoodData, ...filteredHotelData, ...filteredShpData];
    const currentFavorites = allFavorites.slice(indexOfFirstItem, indexOfLastItem);
    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 즐겨찾기 삭제버튼
    const handleDeleteChange = (item,type) => {
        if(type === 'tour'){
            const updatedTourFavorites = tourFavoriteData.filter(favItem => favItem.tourspotNm !== item.tourspotNm);
            setTourFavoriteData(updatedTourFavorites);
            setFilteredTourData(updatedTourFavorites);
            localStorage.setItem('tourFavorites', JSON.stringify(updatedTourFavorites));
        }
        if(type === 'shppg'){
            const updatedShpFavorites = shpFavoriteData.filter(favItem => favItem.shppgNm !== item.shppgNm);
            setShpFavoriteData(updatedShpFavorites);
            setFilteredShpData(updatedShpFavorites);
            localStorage.setItem('shpFavorites', JSON.stringify(updatedShpFavorites));
        }
        if(type === 'rest'){
            const updatedFoodFavorites = foodFavoriteData.filter(favItem => favItem.restrntNm !== item.restrntNm);
            setFoodFavoriteData(updatedFoodFavorites);
            setFilteredFoodData(updatedFoodFavorites);
            localStorage.setItem('foodFavorites', JSON.stringify(updatedFoodFavorites));
        }
        if(type === 'roms'){
            const updatedHotelFavorites = hotelFavoriteData.filter(favItem => favItem.romsNm !== item.romsNm);
            setHotelFavoriteData(updatedHotelFavorites);
            setFilteredHotelData(updatedHotelFavorites);
            localStorage.setItem('hotelFavorites', JSON.stringify(updatedHotelFavorites));
        }
    }

    return (
        <div>
            <FilSearch
                setSearchTerm={setSearchTerm}
                setSelectedDistrict={setSelectedDistrict}
                setSelectedCategory={setSelectedCategory}
                showCategoryFilter={true}
            />
            <div className="detail_wrapper">
                {currentFavorites.length > 0 ? (
                    currentFavorites.map((item, index) => (
                        <div key={index} className="detail_container">
                            <div className="detail_item">
                                <div className="text_container">
                                    <div className="detail_name">장소명 : {item.tourspotNm || item.restrntNm || item.romsNm || item.shppgNm}</div>
                                    <div className="detail_address">주소 : {item.tourspotAddr || item.restrntAddr || item.romsAddr || item.shppgAddr}</div>
                                    <div className="detail_description">설명 : {item.tourspotSumm || item.restrntSumm || item.romsSumm || item.shppgSumm}</div>
                                </div>
                                <div className="detail_btn">
                                    <DelAlert item={item} onConfirm={() => handleDeleteChange(item, Object.prototype.hasOwnProperty.call(item, 'tourspotNm') ? 'tour' : Object.prototype.hasOwnProperty.call(item, 'shppgNm') ? 'shppg' : Object.prototype.hasOwnProperty.call(item, 'restrntNm') ? 'rest' : 'roms')} />
                                    <button className="detail_view_btn">상세보기</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='detail_none'>즐겨찾기 목록이 없습니다.</div>
                )}
            </div>
                <PagenationComponent
                    currentPage={currentPage}
                    totalPages={Math.ceil(allFavorites.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                />
            
        </div>
    );
}

export default FavoriteDetail;



