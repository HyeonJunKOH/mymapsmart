import "./FilSearch.css"

function FilSearch() {
    return (
        <>
            <div className="FilSearch_wrapper">
                <div className="Filter">
                    <select name="필터" className="Filter_select">
                        <option value="1">구전체</option>
                        <option value="2">유성구</option>
                        <option value="3">서구</option>
                        <option value="4">중구</option>
                        <option value="5">동구</option>
                        <option value="6">대덕구</option>
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