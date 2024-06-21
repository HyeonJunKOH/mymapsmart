

const KakaoShareButton = () => {
    // @ts-ignore
    window.Kakao.Share.createCustomButton({
        container: "#kakao-link-btn",
        templateId: 109227,
    });
};


<button
    id="kakao-link-btn"
    className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
    type="button"
    onClick={KakaoShareButton}
>
    공유하기
</button>


export default KakaoShareButton;
