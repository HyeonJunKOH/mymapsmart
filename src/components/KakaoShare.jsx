import { useEffect } from "react";
import PropTypes from "prop-types";

const {Kakao} = window;


const KakaoShareButton = ({ title, description, imageUrl}) => {
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
        }
    }, []);
    const shareKakao = () => {
        const linkUrl = "https://mapsmart.co.kr";
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description: description,
                imageUrl: imageUrl,
                link: {
                    webUrl: linkUrl
                }
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        webUrl: linkUrl
                    }
                }
            ]
        });
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
