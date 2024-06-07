import Header from "../components/Header";
import Main from "../components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate(`/`);
    };

    return (
        <>
            <Header
                title={"MapsMart"}
                leftChild={<FontAwesomeIcon icon={faHouseChimney} onClick={handleHomeClick} />}
                rightChild={<FontAwesomeIcon icon={faHeartCirclePlus} />}
            />
            <Main/>
        </>
    )
}

export default Home;