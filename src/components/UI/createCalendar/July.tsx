import React, { useState } from "react";
import { iAUg } from "./August";
import UtilitCalendar from "./UtilitCalendar";

export interface iMonsth{
  id: number;
  day: number | string;
}

export default function July(props:iAUg){
  const {DAY_31,DAY_30,DAY_29,DAY_28,DAY_27,DAY_26,DAY_25,DAY_1,DAY_2,DAY_3,DAY_4,DAY_5, fn2} =UtilitCalendar(props)
const day1_week = new Date(props.yaer,props.monthId,1).getDay()


const monsth:iMonsth []= []
// воскресенье
if(day1_week === 0){
        for(let i=1;i<30; i++){
          monsth.push({id:fn2(i).getTime(), day:fn2(i)})
        }
          for(let i=0;i>-6; i--){
            monsth.unshift({id: i, day:i})
          }
          monsth.splice(0,6, DAY_25,DAY_26, DAY_27,DAY_28,DAY_29,DAY_30)
          return {monsth}
}else if(day1_week === 6){
  for(let i=1;i<31; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-5; i--){
        monsth.unshift({id: i, day:i})
      }
      monsth.splice(0,5, DAY_26, DAY_27,DAY_28,DAY_29,DAY_30,)
      return {monsth}
}else if(day1_week === 5){
  for(let i=1;i<32; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-4; i--){
        monsth.unshift({id: i, day:i})
      }
      monsth.splice(0,4, DAY_27,DAY_28,DAY_29,DAY_30,)
      return {monsth}
}else if(day1_week === 4){ //четверг
  for(let i=1;i<32; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-3; i--){
        monsth.unshift({id: i, day:i})
      }
      monsth.splice(0,3, DAY_28,DAY_29,DAY_30,)
      monsth.splice(34,1, DAY_1,)
      return {monsth}
}else if(day1_week === 3){ // среда
  for(let i=1;i<34; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-2; i--){
        monsth.unshift({id: i, day:i})
      }
      monsth.splice(0,2, DAY_29,DAY_30,)
      monsth.splice(33,2, DAY_1,DAY_2,)
      return {monsth}
}else if(day1_week === 2){ //вторник
  for(let i=1;i<34; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-1; i--){
        monsth.unshift({id: i, day:i})
      }
      monsth.splice(0,1, DAY_30)
      monsth.splice(32,3, DAY_1,DAY_2,DAY_3,)
     
      return {monsth}
}else if(day1_week === 1){ // понедельник
  for(let i=1;i<34; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      monsth.splice(31,4, DAY_1,DAY_2,DAY_3,DAY_4,)
      return {monsth}
}
return {monsth}
}