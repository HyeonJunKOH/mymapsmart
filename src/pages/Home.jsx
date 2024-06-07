import Header from "../components/Header";
import Main from "../components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    };

    const handleFavorite = () =>{
        navigate(`/favorite`);
    }

    return (
        <>
            <Header
                title={"MapsMart"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHome} />}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} onClick={handleFavorite} />}
            />
            <Main/>
        </>
    )
}

export default Home;