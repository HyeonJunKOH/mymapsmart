import "./Header.css"


// eslint-disable-next-line react/prop-types
function Header({title, leftChild, rightChild}) {
    return (
        <header className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_title">{title}</div>
            <div className="header_right">{rightChild}</div>
        </header>
    );
}

export default Header;