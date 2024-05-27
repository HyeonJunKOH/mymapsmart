import Header from "../components/Header";
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
        </>
    )
}

export default Home;