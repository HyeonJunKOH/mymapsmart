import { useEffect, useState } from "react";
import "./Detail.css"
import PagenationComponent from "./PagenationComponent";

function FoodDetail() {
    const [currentPage, setCurrentPage] = useState(1);
    const [foodData, setFoodData] = useState([]);
    const itemsPerPage = 10;

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const foodItems = data.slice(154, 275)
            setFoodData(foodItems);
        }
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = foodData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(foodData.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="detail_wrapper">
            {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                    <div key={index} className="detail_container">
                        <div className="detail_item">
                            <div className="text_container">
                                <div className="detail_name">장소명 : {item.restrntNm}</div>
                                <div className="detail_address">주소 : {item.restrntAddr}</div>
                                <div className="detail_description">설명 : {item.restrntSumm}</div>
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
    );
}

export default FoodDetail;