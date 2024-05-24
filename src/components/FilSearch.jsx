import "./FilSearch.css"

function FilSearch() {
    return (
        <>
            <div className="FilSearch_wrapper">
                <div className="Filter">
                    <select name="필터" className="Filter_select">
                        <option value="1">주소</option>
                        <option value="2">이름</option>
                        <option value="3">테스트</option>
                        <option value="4">테스트2</option>
                    </select>
                </div>
                <div className="Search">
                    <input type="text" className="Search_input" />
                    <img className="Search_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
                </div>
            </div>
        </>
    )
}

export default FilSearch;