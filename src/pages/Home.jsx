import Header from "../components/Header";
import Main from "../components/Main";


function Home(){
    return (
        <>
            <Header
                title={"MapsMart"}
                leftChild={"🏠"}
                rightChild={"⭐"}
            />
            <Main/>
        </>
    )
}

export default Home;