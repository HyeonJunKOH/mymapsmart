import { useEffect, useState } from "react";
import "./Detail.css"

function TourDetail(){

    const [tourData, setTourData] = useState([]);

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const tourItems = data.filter(item => item.type === 'tour');
            setTourData(tourItems);
        }
    },[])
    return(
        <div className="detail_wrapper">
            {tourData.length > 0 ? (
                tourData.map((item, index) => (
                    <div key={index} className="detail_item">
                        <div className="detail_name">{item.tourspotNm}</div>
                        <div className="detail_address">{item.tourspotAddr}</div>
                        <div className="detail_description">상세설명</div>
                        <button className="detail_favorite_button">담기</button>
                        <button className="detail_view_button">상세보기</button>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default TourDetail;