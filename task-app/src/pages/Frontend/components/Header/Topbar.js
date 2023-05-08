import React,{useState,useEffect} from 'react'
import dayjs from 'dayjs'

export default function Topbar() {


 const  [currentTime, setCurrentTime] = useState("");

 useEffect(()=>{
  setInterval(()=>{
    setCurrentTime(dayjs().format("dddd,MMMM D YYYY, hh:mm:ss A"))
  })

 },[])
  return (
    <header className='bg-primary py-1'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="mb-0 text-center text-white">{currentTime}</p>
            </div>
          </div>
        </div>
      
    </header>
  )
}
