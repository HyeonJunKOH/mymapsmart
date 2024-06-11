import FilSearch from "../components/FilSearch";
import FoodDetail from "../components/FoodDetail";
import Header from "../components/Header";
import Menu from "../components/Menu";



function Food(){
    return(
        <>
            <Header title={"음식점"}/>
            <Menu/>
            <FilSearch/>
            <FoodDetail/>
        </>
    )
}

export default Food;