import { useEffect, useState } from "react";
import "./Detail.css"

function TourDetail(){

    const [tourData, setTourData] = useState([]);

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const tourItems = data.slice(0,10);
            setTourData(tourItems);
        }
    },[])
    return(
        <div className="detail_wrapper">
            {tourData.length > 0 ? (
                tourData.map((item, index) => (
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
        </div>
    );
}

export default TourDetail;