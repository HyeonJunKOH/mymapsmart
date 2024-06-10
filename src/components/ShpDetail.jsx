import { useEffect, useState } from "react";
import "./Detail.css"
import PagenationComponent from "./PagenationComponent";

function ShpDetail() {
    const [currentPage, setCurrentPage] = useState(1);
    const [shpData, setShpData] = useState([]);
    const itemsPerPage = 10;

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const shpItems = data.slice(142, 154)
            console.log(shpItems);
            setShpData(shpItems);
        }
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shpData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(shpData.length / itemsPerPage);
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
                                <div className="detail_name">장소명 : {item.shppgNm}</div>
                                <div className="detail_address">주소 : {item.shppgAddr}</div>
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

export default ShpDetail;