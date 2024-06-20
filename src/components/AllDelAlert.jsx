// CustomAlert.js
import Swal from "sweetalert2";
import propTypes from "prop-types";

const AllDelAlert = ({onConfirm, hasFavorites }) => {
    const handleAllDeleteFavorite = () => {
        if(!hasFavorites){
            Swal.fire("삭제할 내역이 없습니다.","","info");
            return;
        }
        Swal.fire({
            title: "전체 삭제 하시겠습니까?",
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "삭제",
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm();
                Swal.fire("전체 삭제 되었습니다.", "", "success");
            }
        });
    };

    return (
        <button className="detail_allDelete_btn" onClick={handleAllDeleteFavorite}>
            전체삭제
        </button>
    )
};

AllDelAlert.propTypes = {
    onConfirm: propTypes.func.isRequired,
    hasFavorites:propTypes.bool.isRequired
}

export default AllDelAlert;
