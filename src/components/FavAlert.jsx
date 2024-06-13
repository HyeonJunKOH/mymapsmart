// CustomAlert.js
import Swal from "sweetalert2";
import propTypes from "prop-types";

const FavAlert = ({item, onConfirm}) => {
    const handleAddFavorite = () => {
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
    onConfirm: propTypes.func.isRequired
}

export default FavAlert;
