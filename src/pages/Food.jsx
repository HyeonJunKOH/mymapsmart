import Detail from "../components/Detail";
import Header from "../components/Header";
import Menu from "../components/Menu";



function Food(){
    return(
        <>
            <Header title={"음식점"}/>
            <Menu/>
            <Detail/>
        </>
    )
}

export default Food;