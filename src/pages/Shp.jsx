import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Shp(){
    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate(`/`);
    };
    const handleFavorite = () => {
        navigate(`/favorite`);
    }

    return(
        <>
            <Header
                title={"쇼핑몰"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHome} />}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} onClick={handleFavorite} />}
            />
            <Menu/>
        </>
    )
}

export default Shp;