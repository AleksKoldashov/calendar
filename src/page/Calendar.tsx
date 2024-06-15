import React, { useState } from "react";
import '../styles/page/calendar.css'
import { CreateCaledar } from "../components/UI/createCalendar/CreateCaledar";
import  ItemDay  from "../components/ItemDay";
import useSelect from "../components/UI/Select/useSelect";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import MySelect from "../components/UI/Select/MySelect";
import MyButton from "../components/UI/Button/MyButton";
import useButton from "../components/UI/Button/useButton";
import { update_lesson } from "../redux/slice/daySlise";
import MyModal from "../components/UI/Modal/MyModal";
import useMyModal from "../components/UI/Modal/useMyModal";
import MyChexBox from "../components/UI/CheckBox/MyCheckBox";
import useMyChexBox from "../components/UI/CheckBox/useMyChexBox";

interface iSel {
  value: string;
  onChange: ()=>string,
  onCl: ()=>void,
  onClick: ()=>void;
}

export default function Calendar() {

const day = useAppSelector(state=>state.day.day)
const dispatch = useAppDispatch()
const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
const checkbox= useMyChexBox()
const checkbox1= useMyChexBox()
const checkbox2= useMyChexBox()
const modal = useMyModal()
const {mon, data, monthInc, monthDinc,nowMonth} = CreateCaledar()
const sel:iSel = useSelect(modal)

console.log(checkbox);

const add=()=>{
  if(sel.value!==null&&day!==0){
  dispatch(update_lesson({id: day, title:sel.value, time: checkbox&&checkbox1&&checkbox2}))
  }
}

const btn_schedule = useButton(add)
const btn_month_dic = useButton(monthDinc)
const btn_month_inc = useButton(monthInc) 
const title = '13-45'
const title1 = '12-45'
const title2 = '11-45'
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
    <MyModal props={modal} content={[MyChexBox({props:checkbox, title}),MyChexBox({props:checkbox1,title: title1}),MyChexBox({props: checkbox2,title: title2})]}/>
    </div>
    <div className="week">
      {
        week.map((item, index)=><div key={index}>{item}</div>)
      }
    </div>
    <div className="calendar">
       {
        data?.map((item:any, index:any)=><ItemDay item={item} key={item.id}/>)
       }
    </div>
    </>
    
  );
}


