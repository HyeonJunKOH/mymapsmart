import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


function Hotel(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate(`/`);
    };
    return(
        <>
            <Header
                title={"숙박시설"}
                leftChild={<button onClick={handleHomeClick}>🏠</button>}
                rightChild={"⭐"}
            />
        </>
    )
}

export default Hotel;