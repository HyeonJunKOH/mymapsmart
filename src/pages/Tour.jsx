import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";



function Tour(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate(`/`);
    };

    return (
        <>
            <Header
                title={"관광지"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHomeClick} />}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} />}
            />
            <Menu/>
        </>
    )
}

export default Tour;