import Header from "../components/Header";
import Menu from "../components/Menu";
import FilSearch from "../components/FilSearch";

function Favorite(){
    return(
        <>
            <Header title={"즐겨찾기"}/>
            <Menu/>
            <FilSearch/>
        </>
    )
}

export default Favorite;