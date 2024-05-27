import { useEffect} from "react";


const {kakao} = window;


function Map(){
    useEffect(()=>{
        // 지도를 표시할 div
        const container = document.getElementById('map');
        const option = {
            // 지도 중심좌표
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 8 //지도 확대 레벨
        }
        // 지도 생성
        const map = new kakao.maps.Map(container, option);
        // 주소-좌표 변환 객체를 생성
        const geocoder = new kakao.maps.services.Geocoder();
        // 로컬 스토리지에서 데이터 가져오기
        const data = JSON.parse(localStorage.getItem("data"));
    // 마커를 생성하고 지도에 표시하는 함수
    function addMarker(data){
        if(data&&data.length > 0 ){
            data.forEach(item =>{
                const address = item.tourspotAddr;
                const content = item.tourspotNm;

                if (!address) {
                    console.error('Invalid address:', address);
                    return;
                }
                // 주소로 좌표를 검색합니다.
                geocoder.addressSearch(address, function (result, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {
                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                        // 결과값으로 받은 위치를 마커로 표시합니다
                        var marker = new kakao.maps.Marker({
                            map: map,
                            position: coords,
                        });
                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        var infowindow = new kakao.maps.InfoWindow({
                            content: `<div style="width:150px;text-align:center;padding:6px 0;">${content}</div>`,
                            removable: true
                        });
                        infowindow.open(map, marker);
                    } else {
                        console.error(`주소를 찾을 수 없습니다: ${address}`);
                    }
                    map.setCenter(coords);
                });
            });
        }else{
            console.log("데이터를 로컬스토리지에서 찾을 수 없음");
        }
    }
    // 마커 추가 함수 호출
    addMarker(data);   
    },[]);
    return(
        <div id="map" style={{ height: "500px", maxHeight: "500px", maxWidth: "1100px" }}></div>
    )
}

export default Map;