// CustomAlert.js
import Swal from "sweetalert2";
import propTypes from "prop-types";

const FavAlert = ({item, onConfirm, unConfirm}) => {
    const handleAddFavorite = () => {
        if(!unConfirm){
            Swal.fire("이미 추가된 목록 입니다.","","info");
            return;
        }
        Swal.fire({
            title: "즐겨찾기에 추가하시겠습니까?",
            showCancelButton: true,
            cancelButtonText:"취소",
            confirmButtonText: "추가",
        }).then((result)=>{
            if(result.isConfirmed){
                onConfirm(item);
                Swal.fire("추가 되었습니다.","","success");
            }
        });
    };

    return(
        <button className="detail_favorite_btn" onClick={handleAddFavorite}>
            담기
        </button>
    )
};

FavAlert.propTypes = {
    item: propTypes.object.isRequired,
    onConfirm: propTypes.func.isRequired,
    unConfirm: propTypes.bool
}

export default FavAlert;
