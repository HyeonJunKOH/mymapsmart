import Header from "../components/Header";
import KakaoShareButton from "../components/KakaoShare";
import Main from "../components/Main";

function Home(){

    return (
        <>
            <Header title={"MapsMart"}/>
            <Main/>
            <div className="share-button-container">
                <KakaoShareButton/>
            </div>
        </>
    )
}

export default Home;