import { useEffect, useState } from 'react';
import './Detail.css'



function FavoriteDetail() {
    // 즐겨찾기 데이터
    const [favoriteData, setFavoriteData] = useState([]);
    // 페이지네이션
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // 필터 데이터를 새로 저장할 스테이트
    const [filteredData, setFilteredData] = useState([]);
    // 필터 기능 스테이트
    const [selectedDistrict, setSelectedDistrict] = useState('구전체');
    // 검색기능 스테이트
    const [searchTerm, setSearchTerm] = useState('');

    // 로컬스토리지에 저장되어 있는 즐겨찾기 목록을 가져오는 기능
    useEffect(()=>{
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        setFavoriteData(favorites);
        setFilteredData(favorites);
    },[]);

    // 필터 및 검색 기능 
    useEffect(()=>{
        const filterSearchData = () => {
            let updatedData = favoriteData;
            // 선택된 데이터가 구전체가 아니라면 선택된 구가 포함된 주소값 얻어오기
            if(selectedDistrict !== '구전체'){
                updatedData = updatedData.filter(item=> item.tourspotAddr.includes(selectedDistrict));
            }
            // 검색된 값의 이름이 toursopotNm에 포함되어 있다면 데이터 얻어오기
            if (searchTerm) {
                updatedData = updatedData.filter(item => item.tourspotNm.includes(searchTerm));
            }
            // 필터링된 데이터를 setFilteredData 에 저장
            setFilteredData(updatedData);
            // 페이지를 1번 페이지로 초기화
            setCurrentPage(1);
        };
        // filterSearchData함수를 호출
        filterSearchData();
        // 아래 3개의 데이터 값이 변경 될때마다 useEffect 발동
    },[searchTerm, selectedDistrict, favoriteData]);



    


    return (
        <div>
            <h2>즐겨찾기 목록</h2>
            <ul>
                {favoriteItems.map((item, index) => (
                    <li key={index}>
                        <div>장소명: {item.tourspotNm}</div>
                        <div>주소: {item.tourspotAddr}</div>
                        <div>설명: {item.tourspotSumm}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteDetail;



