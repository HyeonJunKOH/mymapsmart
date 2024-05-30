import { Route, Routes } from 'react-router-dom'
import './App.css'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import axios from 'axios'
import {TourUrl, ShpUrl, RestUrl, RomUrl} from './api'



function App() {
  // 문화관광지 api 로컬 스토리지 저장
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response1 = await axios.get(TourUrl);
        const response2 = await axios.get(ShpUrl);
        const response3 = await axios.get(RestUrl);
        const response4 = await axios.get(RomUrl);

        const mergeData = response1.data.response.body.items.concat(
          response2.data.response.body.items,
          response3.data.response.body.items,
          response4.data.response.body.items
        );

        localStorage.setItem("data", JSON.stringify(mergeData));
      }catch(error){
        console.error(error);
      }
    };
    fetchData();
  },[]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
