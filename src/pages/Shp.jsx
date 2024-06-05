import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


function Shp(){
    const navigate = useNavigate();

    const handleHomeClick = ()=>{
        navigate(`/`);
    };

    return(
        <>
            <Header
                title={"쇼핑몰"}
                leftChild={<button onClick={handleHomeClick}>🏠</button>}
                rightChild={"⭐"}
            />
        </>
    )
}

export default Shp;