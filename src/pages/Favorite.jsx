import FavoriteDetail from "../components/FavoriteDetail";
import Header from "../components/Header";
import Menu from "../components/Menu";

function Favorite(){
    return(
        <>
            <Header title={"즐겨찾기"}/>
            <Menu/>
            <FavoriteDetail/>
        </>
    )
}

export default Favorite;