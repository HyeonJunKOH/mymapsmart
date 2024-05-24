const BASE_URL1 = "http://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot"
const BASE_URL2 = "http://apis.data.go.kr/6300000/openapi2022/shppg/getshppg"
const BASE_URL3 = "http://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt"
const BASE_URL4 = "http://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms"

export const TourUrl = `${BASE_URL1}?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`
export const ShpUrl = `${BASE_URL2}?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`
export const RestUrl = `${BASE_URL3}?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`
export const RomUrl = `${BASE_URL4}?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`

