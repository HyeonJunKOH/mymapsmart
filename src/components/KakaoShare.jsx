import PropTypes from "prop-types";

const {Kakao} = window;


const KakaoShareButton = () => {
    const shareKakao = () => {
        Kakao.Share.createCustomButton({
            container: '#kakaotalk-sharing-btn',
            templateId: 109227,
        })
    };
    return (
        <button onClick={shareKakao}>카카오톡 공유하기</button>
    );
};


KakaoShareButton.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
}


export default KakaoShareButton;
