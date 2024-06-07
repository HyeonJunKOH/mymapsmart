import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Shp(){
    const navigate = useNavigate();

    const handleHomeClick = ()=>{
        navigate(`/`);
    };

    return(
        <>
            <Header
                title={"쇼핑몰"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHomeClick} />}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} />}
            />
            <Menu/>
        </>
    )
}

export default Shp;