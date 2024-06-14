import { useLocation } from "react-router-dom";
import FavAlert from "./FavAlert";



function DetailPage(){
    const location = useLocation();
    const item = location.state?.item;

    if (!item) {
        return <div>잘못된 접근입니다.</div>;
    }

    // 담기버튼을 눌렀을 때 로컬스토리지에 따로 즐겨찾기로 저장하는 함수
    const addFavorite = (item) => {
        if (item) {
            const existingFavorites = JSON.parse(localStorage.getItem("tourFavorites" || "shpFavorites" || "foodFavorites" || "hotelFavorites")) || [];
            const updatedFavorites = [...existingFavorites, item];
            localStorage.setItem("tourFavorites" || "shpFavorites" || "foodFavorites" || "hotelFavorites", JSON.stringify(updatedFavorites));
        }
    };

    return (
        <div>
            <h1>장소명: {item.tourspotNm || item.shppgNm || item.restrntNm || item.romsNm}</h1>
            <p>주소: {item.tourspotAddr || item.shppgAddr || item.restrntAddr || item.romsAddr}</p>
            <p>설명: {item.tourspotSumm || item.shppgSumm || item.restrntSumm || item.romsSumm}</p>
            <FavAlert item={item} onConfirm={addFavorite} />
        </div>
        
    );
}

export default DetailPage;