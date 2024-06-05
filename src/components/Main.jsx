import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Main.css"
import main_tourImage from "../assets/main_tour.jpg"
import main_hotelImage from "../assets/main_hotel.jpeg"
import main_shpImage from "../assets/main_shp.png";
import main_foodImage from "../assets/main_food.jpg";
import 'animate.css'


function Main(){
    useEffect(()=>{


    })
    return(
        <div className="main_wrapper">
            <div className="main_title1">지금 바로! 원하는 장소를 담아보세요!</div>
            <div className="main_title2">나만의 Maps! Mart~</div>
            <div className="main_title3">음식점, 명소, 쇼핑, 숙박까지! 대전의 모든 핫플레이스를 만나보세요. 장소를 골라 나만의 장바구니를 만들고 공유할 수 있습니다.</div>
            <div className="main_menu">
            <Card className="main_card" id="main_tour">
                <Card.Img className="main_img" src={main_tourImage} />
                <Card.Body>
                    <Card.Title>관광지</Card.Title>
                    <Card.Text className="main_text">
                        대전 전역에 멋지고 즐거운 관광지를 만나보세요.
                    </Card.Text>
                    <Button className="main_button_tour">관광지 바로가기</Button>
                </Card.Body>
            </Card>
            <Card className="main_card" id="main_food">
                <Card.Img className="main_img" src={main_foodImage}/>
                <Card.Body>
                    <Card.Title>음식점</Card.Title>
                    <Card.Text className="main_text">
                        대전 전역에 맛있는 맛집을 확인해보세요.
                    </Card.Text>
                    <Button className="main_button_food">음식점 바로가기</Button>
                </Card.Body>
            </Card>
                <Card className="main_card" id="main_hotel">
                    <Card.Img className="main_img" src={main_hotelImage}/>
                    <Card.Body>
                        <Card.Title>숙박시설</Card.Title>
                        <Card.Text className="main_text">
                            대전 전역 멋지고 뷰가 좋은 숙박시설을 만나보세요.
                        </Card.Text>
                        <Button className="main_button_hotel">숙박시설 바로가기</Button>
                    </Card.Body>
                </Card>
                <Card className="main_card" id="main_shp">
                    <Card.Img className="main_img" src={main_shpImage}/>
                    <Card.Body>
                        <Card.Title>쇼핑몰</Card.Title>
                        <Card.Text className="main_text">
                            대전 전역에 있는 복합 쇼핑몰을 확인해보세요.
                        </Card.Text>
                        <Button className="main_button_shp">쇼핑몰 바로가기</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Main;