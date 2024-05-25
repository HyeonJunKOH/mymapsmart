import "./Header.css"


// eslint-disable-next-line react/prop-types
function Header({title,leftChild, rightChild}) {
    return (
        <header className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_title">{title}
                <div className="header_tooltip">
                    <span className="tooltip1">원하는 장소를 담아보세요!</span>
                    <span className="tooltip2">지역을 선택하고 대전의 모든 핫플레이스를 만나보실 수 있습니다.</span>
                    <span className="tooltip3">장소를 골라 나만의 장바구니를 채우고 공유할 수 있습니다!</span>
                </div>
            </div>
            <div className="header_right">{rightChild}</div>
        </header>
    );
}

export default Header;