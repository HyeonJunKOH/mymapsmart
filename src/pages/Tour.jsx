import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";



function Tour(){
    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    };
    const handleFavorite = () => {
        navigate(`/favorite`);
    }

    return (
        <>
            <Header
                title={"관광지"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHome} />}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} onClick={handleFavorite} />}
            />
            <Menu/>
        </>
    )
}

export default Tour;