
import FilSearch from "../components/FilSearch";
import Header from "../components/Header";
import Menu from "../components/Menu";
import TourDetail from "../components/TourDetail";




function Tour(){
    
    return (
        <>
            <Header title={"관광지"}/>
            <Menu/>
            <FilSearch/>
            <TourDetail/>
        </>
    )
}

export default Tour;