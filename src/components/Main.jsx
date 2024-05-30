import { useEffect } from "react";
import "./Main.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Main(){
    useEffect(()=>{


    })
    return(
        <div className="main_wrapper">
            <div className="main_title1">지금 바로! 원하는 장소를 담아보세요!</div>
            <div className="main_title2">나만의 Maps! Mart~</div>
            <div className="main_title3">음식점, 명소, 쇼핑, 숙박까지! 대전의 모든 핫플레이스를 만나보세요. 장소를 골라 나만의 장바구니를 만들고 공유할 수 있습니다.</div>
            <Card id="main_card">
                <Card.Img/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </Card.Text>
                    <Button id="variant">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Main;