import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({title}) {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    };

    const handleFavorite = () => {
        navigate(`/favorite`);
    }
    return (
        <header className="Header">
            <div className="header_left">
                <FontAwesomeIcon icon={faHouseChimney} onClick={handleHome} className="header_home" />
            </div>
            <div className="header_title">{title}</div>
            <div className="header_right">
                <FontAwesomeIcon icon={faHeartCirclePlus} onClick={handleFavorite} className="header_favorite"/>
            </div>
        </header>
    );
}

export default Header;