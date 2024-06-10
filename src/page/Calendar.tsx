import React, { useState } from "react";
import '../styles/page/calendar.css'
import { reverse } from "dns";
import { CreateCaledar } from "../components/CreateCaledar";
import useInput from "../components/UI/useInput";


export default function Calendar() {
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
const placeholder= week[0]
const {mon, data, monthInc, monthDinc,nowMonth} = CreateCaledar()



  return (
    <>
    <button onClick={()=>{}}>cltkfnm</button>
    <button onClick={()=>{monthDinc()}}>-</button>
    {nowMonth} {mon.yaer}
    <button onClick={()=>{monthInc()}}>+</button> 
    <div className="week">
      {
        week.map((item)=><div>{item}</div>)
      }
    </div>
    <div className="calendar">
       {
        data?.map((item:any)=><div style={{border:'1px solid rgba(236, 236, 236, 1)'}}>{item}</div>)
       }
    </div>
    </>
    
  );
}


