import React, { useState } from "react";
import '../styles/page/calendar.css'
import { CreateCaledar } from "../components/UI/createCalendar/CreateCaledar";
import  ItemDay  from "../components/ItemDay";
import useSelect from "../components/UI/Select/useSelect";
import { useAppSelector } from "../redux/hooks/hooks";
import MySelect from "../components/UI/Select/MySelect";
import MyButton from "../components/UI/Button/MyButton";
import useButton from "../components/UI/Button/useButton";


interface iSel {
  value: string;
  onChange: ()=>string
}

// interface iLesson{
//   a:string;
//   id: number;
// }




export default function Calendar() {

const day = useAppSelector(state=>state.day.day)

const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

const {mon, data, monthInc, monthDinc,nowMonth} = CreateCaledar()
const sel:iSel = useSelect()



const [lesson,setLesson]=useState<any >([])


const add=()=>{
  console.log(lesson);
  if(sel.value!==undefined&&day!==0)
  setLesson([...lesson,{a: sel.value, id: day}])
}

const btn_schedule = useButton(add)
const btn_month_dic = useButton(monthDinc)
const btn_month_inc = useButton(monthInc) 


return (
    <>
    <div className="schedule">
    <MySelect props={sel}/>
    <MyButton props={btn_schedule} children={'Изменить расписание'} stl='btn_update'/>
    </div>
    <div className="data">
    <MyButton props={btn_month_dic} children={''} stl='btn_month_dic'/>
    <h4>{nowMonth} {mon.yaer}</h4>
    <MyButton props={btn_month_inc} children={''} stl='btn_month_inc'/>
    </div>
    <div className="week">
      {
        week.map((item, index)=><div key={index}>{item}</div>)
      }
    </div>
    <div className="calendar">
       {
        data?.map((item:any, index:any)=><ItemDay item={item} lesson={lesson} key={index}/>)
       }
    </div>
    </>
    
  );
}


