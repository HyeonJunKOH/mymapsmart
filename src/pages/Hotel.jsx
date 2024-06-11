import FilSearch from "../components/FilSearch";
import Header from "../components/Header";
import HotelDetail from "../components/HotelDetail";
import Menu from "../components/Menu";

function Hotel(){

    return(
        <>
            <Header title={"숙박시설"}/>
            <Menu/>
            <FilSearch/>
            <HotelDetail/>
        </>
    )
}

export default Hotel;