// CustomAlert.js
import Swal from "sweetalert2";
import propTypes from "prop-types";

const DelAlert = ({ item, onConfirm }) => {
    const handleDeleteFavorite = () => {
        Swal.fire({
            title: "삭제 하시겠습니까?",
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "삭제",
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm(item);
                Swal.fire("삭제 되었습니다.", "", "success");
            }
        });
    };

    return (
        <button className="detail_delete_btn" onClick={handleDeleteFavorite}>
            삭제
        </button>
    )
};

DelAlert.propTypes = {
    item: propTypes.object.isRequired,
    onConfirm: propTypes.func.isRequired
}

export default DelAlert;
