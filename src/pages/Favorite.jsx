import Header from "../components/Header";
import Menu from "../components/Menu";
import FilSearch from "../components/FilSearch";
import FavoriteDetail from "../components/FavoriteDetail";

function Favorite(){
    return(
        <>
            <Header title={"즐겨찾기"}/>
            <Menu/>
            <FilSearch/>
            <FavoriteDetail/>
        </>
    )
}

export default Favorite;