import { useState } from "react";
import "./FilSearch.css"
import propTypes from "prop-types";



function FilSearch({ setSearchTerm, setSelectedDistrict, showCategoryFilter, setSelectedCategory }) {
    const [userInput, setUserInput] = useState('');

    // 검색기능 함수
    const handleSearchChange = (e)=>{
        setUserInput(e.target.value);
        setSearchTerm(e.target.value);
    };
    // 필터기능 함수
    const handleFilterChange = (e)=>{
        setSelectedDistrict(e.target.value);
    }
    // 카테고리 기능 함수
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    return (
        <>
            <div className="FilSearch_wrapper">
                <div className="Filter">
                    <select name="필터" className="Filter_select" onChange={handleFilterChange}>
                        <option value="구전체">구전체</option>
                        <option value="유성구">유성구</option>
                        <option value="서구">서구</option>
                        <option value="중구">중구</option>
                        <option value="동구">동구</option>
                        <option value="대덕구">대덕구</option>
                    </select>
                    {showCategoryFilter && (
                        <select name="카테고리" className="Filter_select" onChange={handleCategoryChange}>
                            <option value="카테고리 전체">카테고리 전체</option>
                            <option value="tourFavorites">관광지</option>
                            <option value="foodFavorites">음식점</option>
                            <option value="hotelFavorites">숙박시설</option>
                            <option value="shpFavorites">쇼핑몰</option>
                        </select>
                    )}
                </div>
                <div className="Search">
                    <input type="text" className="Search_input" value={userInput} onChange={handleSearchChange}/>
                    <img className="Search_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
                </div>
            </div>
        </>
    )
}

FilSearch.propTypes = {
    setSearchTerm: propTypes.func.isRequired,
    setSelectedDistrict: propTypes.func.isRequired,
    setSelectedCategory: propTypes.func,
    showCategoryFilter: propTypes.bool.isRequired
};


export default FilSearch;