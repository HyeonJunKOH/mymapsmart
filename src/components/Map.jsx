import axios from "axios";
import { useEffect } from "react";


const BASE_URL = "http://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot"
const url = `${BASE_URL}?serviceKey=${import.meta.env.VITE_API_KEY}&pageNo=1&numOfRows=10`

function Map(){
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await axios.get(url);
                console.log(data);
            }catch(error){
                console.error("Error fetching data",error);
            }
        }
       fetchData();

    },[]);



    return(
        <div></div>
    )
}

export default Map;