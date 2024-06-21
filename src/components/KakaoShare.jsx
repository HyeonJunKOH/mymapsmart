import { useEffect } from "react";



const KakaoShareButton = () => {

    useEffect(() => {
        const Kakao = window;
        // Kakao SDK 초기화 및 앱 키 설정
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

        initializeKakao();
        // Kakao SDK로부터 커스텀 버튼 생성
        Kakao.Share.createCustomButton({
            container: '#kakaotalk-sharing-btn',
            templateId: 109227,
            templateArgs:{
                title: '가나다',
                description: '간디'
            }
        });

        // 컴포넌트 언마운트 시 리소스 정리
        return () => {
            // 커스텀 버튼 제거
            const kakaoButton = document.getElementById('kakaotalk-sharing-btn');
            kakaoButton.innerHTML = ''; // 버튼 요소 비우기
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
