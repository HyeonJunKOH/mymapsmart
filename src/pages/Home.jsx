import Header from "../components/Header";
import KakaoShareButton from "../components/KakaoShare";
import Main from "../components/Main";

function Home(){

    return (
        <>
            <Header title={"MapsMart"}/>
            <Main/>
            <div className="share-button-container">
                <KakaoShareButton
                    title="MapsMart를 공유하세요!"
                    description="MapsMart는 지도를 쉽게 사용할 수 있는 서비스입니다."
                    imageUrl="이미지 URL"
                />
            </div>
        </>
    )
}

export default Home;