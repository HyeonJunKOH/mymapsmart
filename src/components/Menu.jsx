import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu(){
    const navigate = useNavigate();

    const handleTour = () =>{
        navigate(`/tour`)
    };
    const handleFood = () =>{
        navigate(`/food`)
    };
    const handleHotel = () =>{
        navigate(`/hotel`)
    };
    const handleShp = () =>{
        navigate(`/shp`)
    };

    return(
        <>
            <div className="menu_wrapper">
                <div className="menu_tour" onClick={handleTour}>관광지</div>
                <div className="menu_food" onClick={handleFood}>음식점</div>
                <div className="menu_hotel" onClick={handleHotel}>숙박시설</div>
                <div className="menu_shp" onClick={handleShp}>쇼핑몰</div>
            </div>
        </>
    )
}

export default Menu;