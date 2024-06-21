import { useEffect } from "react";

const KakaoShareButton = () => {
    useEffect(() => {
        const initializeKakao = async () => {
            if (!window.Kakao.isInitialized()) {
                await new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://t1.kakaocdn.net/kakao/js/sdk/kakao.js';
                    script.onload = () => {
                        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
                        resolve();
                    };
                    document.head.appendChild(script);
                });
            }
        };

        const createKakaoButton = () => {
            initializeKakao().then(() => {
                window.Kakao.Link.createDefaultButton({
                    container: '#kakaotalk-sharing-btn',
                    objectType: 'feed',
                    content: {
                        title: '가나다',
                        description: '간디'
                    }
                });
            });
        };

        createKakaoButton();

        return () => {
            const kakaoButton = document.getElementById('kakaotalk-sharing-btn');
            kakaoButton.innerHTML = '';
        };
    }, []);

    return (
        <a id="kakaotalk-sharing-btn" href="javascript:;">
            <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                alt="카카오톡 공유 보내기 버튼" />
        </a>
    );
};

export default KakaoShareButton;
