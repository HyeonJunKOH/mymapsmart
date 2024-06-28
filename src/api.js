const BASE_URL1 = "https://apis.data.go.kr/6300000/openapi2022/tourspot/"
const BASE_URL2 = "https://apis.data.go.kr/6300000/openapi2022/shppg/"
const BASE_URL3 = "https://apis.data.go.kr/6300000/openapi2022/restrnt/"
const BASE_URL4 = "https://apis.data.go.kr/6300000/openapi2022/tourroms/"

export const TourUrl = `${BASE_URL1}gettourspot?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`
export const ShpUrl = `${BASE_URL2}getshppg?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`
export const RestUrl = `${BASE_URL3}getrestrnt?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`
export const RomUrl = `${BASE_URL4}gettourroms?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=1000`

