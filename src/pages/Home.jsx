import FilSearch from "../components/FilSearch";
import Header from "../components/Header";
import Map from "../components/Map";
import Menu from "../components/Menu";


function Home(){
    return (
        <>
            <Header
                title={"MapsMart"}
                leftChild={"🏠"}
                rightChild={"⭐"}
            />
            <Menu/>
            <FilSearch/>
            <Map/>
        </>
    )
}

export default Home;