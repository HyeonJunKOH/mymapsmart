import { useState } from "react";
import "./FilSearch.css"
import propTypes from "prop-types";



// { setSearchTerm, setSelectedDistrict } TourDetail에 보낼 
function FilSearch({ setSearchTerm, setSelectedDistrict }) {
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
};

export default FilSearch;