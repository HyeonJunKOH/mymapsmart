import { useNavigate } from "react-router-dom";
import Header from "../components/Header";




function Food(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate(`/`);
    };

    return(
        <>
            <Header
                title={"음식점"}
                leftChild={<button onClick={handleHomeClick}>🏠</button>}
                rightChild={"⭐"}
            />
        </>
    )
}

export default Food;