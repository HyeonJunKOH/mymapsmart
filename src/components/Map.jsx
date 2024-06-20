import { useEffect } from "react";
import propTypes from "prop-types";
const { kakao } = window;

function Map({ address, name }) {
    useEffect(() => {
        if (!address) {
            console.error('Invalid address:', address);
            return;
        }
        if(!name){
            console.error('Invalid name', name);
            return;
        }

        // 지도를 표시할 div
        const container = document.getElementById('map');
        const option = {
            // 지도 중심좌표
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3 // 지도 확대 레벨
        };

        // 지도 생성
        const map = new kakao.maps.Map(container, option);

        // 주소-좌표 변환 객체를 생성
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다.
        geocoder.addressSearch(address, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="width:150px;text-align:center;padding:6px 0;">${name}</div>`,
                    removable: true
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } else {
                console.error(`주소를 찾을 수 없습니다: ${address}`);
            }
        });
    }, [address,name]);

    return (
        <div id="map" style={{ height: "500px", maxHeight: "500px", maxWidth: "1100px" }}></div>
    );
}

Map.propTypes = {
    address: propTypes.string.isRequired,
    name: propTypes.string.isRequired
}

export default Map;
