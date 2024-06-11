import FilSearch from "../components/FilSearch";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ShpDetail from "../components/ShpDetail";

function Shp(){

    return(
        <>
            <Header title={"쇼핑몰"}/>
            <Menu/>
            <FilSearch/>
            <ShpDetail/>
        </>
    )
}

export default Shp;