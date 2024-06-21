import { useLocation } from "react-router-dom";
import './DetailPage.css';
import Map from "./Map";


function DetailPage(){
    const location = useLocation();
    const item = location.state?.item;
    // 즐겨찾기 데이터
    // const [, setFavorites] = useState([]);


    // 주소 데이터를 가져온다.
    const address = item.tourspotAddr || item.shppgAddr || item.restrntAddr || item.romsAddr;
    // 장소 데이터를 가져온다.
    const name = item.tourspotNm || item.shppgNm || item.restrntNm || item.romsNm;
    // 홈페이지 URL을 가져온다.
    const url = item.urlAddr || item.shppgHmpgUrl || item.romsHmpgAddr;

    return (
        <div className="page_wrapper">
            <div className="page_container">
                <h1>장소명: {item.tourspotNm || item.shppgNm || item.restrntNm || item.romsNm}</h1>
                <p>주소: {item.tourspotAddr || item.shppgAddr || item.restrntAddr || item.romsAddr}</p>
                <p>설명 : {item.tourspotSumm || item.restrntSumm || item.romsSumm || item.shppgSumm ?
                    (
                        <>
                            {item.tourspotSumm && <span>{item.tourspotSumm}</span>}
                            {item.restrntSumm && <span>{item.restrntSumm}</span>}
                            {item.romsSumm && <span>{item.romsSumm}</span>}
                            {item.shppgSumm && <span>{item.shppgSumm}</span>}
                        </>
                    ) : (
                        <span>정보가 없습니다.</span>
                    )}</p>
                <p>
                    홈페이지:
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {url}
                        </a>
                    ) : (
                        "정보가 없습니다."
                    )}
                </p>
                <p>번호 : {item.refadNo || item.shppgInqrTel || item.restrntInqrTel || item.romsRefadNo}</p>
            </div>
            <div className="page_map">
                <Map address={address} name={name} />
            </div>
        </div>
        
    );
}

export default DetailPage;