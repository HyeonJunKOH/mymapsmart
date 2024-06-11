import FoodDetail from "../components/FoodDetail";
import Header from "../components/Header";
import Menu from "../components/Menu";



function Food(){
    return(
        <>
            <Header title={"음식점"}/>
            <Menu/>
            <FoodDetail/>
        </>
    )
}

export default Food;