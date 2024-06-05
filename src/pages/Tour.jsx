import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navibar from "../components/Navibar";



function Tour(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate(`/`);
    };

    return (
        <>
            <Header
                title={"관광지"}
                leftChild={<button onClick={handleHomeClick}>🏠</button>}
                rightChild={"⭐"}
            />
            <Navibar/>
        </>
    )
}

export default Tour;