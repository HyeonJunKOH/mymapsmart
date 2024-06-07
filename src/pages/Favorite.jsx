import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import { faHeartCirclePlus, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Favorite(){
    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    };

    const handleFavorite = () => {
        navigate(`/favorite`);
    }
    return(
        <>
            <Header
                title={"즐겨찾기"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHome}/>}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} onClick={handleFavorite}/>}
            />
        </>
    )
}

export default Favorite;