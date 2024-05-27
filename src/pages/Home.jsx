import Header from "../components/Header";
import Main from "../components/Main";
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
            <Main/>
        </>
    )
}

export default Home;