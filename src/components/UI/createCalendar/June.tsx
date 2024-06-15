import React, { useState } from "react";
import { iAUg } from "./August";
import UtilitCalendar from "./UtilitCalendar";




export default function June (props:iAUg){
const {DAY_31,DAY_30,DAY_29,DAY_28,DAY_27,DAY_26,DAY_25,DAY_1,DAY_2,DAY_3,DAY_4,DAY_5, fn2} =UtilitCalendar(props)
const day1_week = new Date(props.yaer,props.monthId,1).getDay()

const dateNow = new Date
const pars = Date.parse("2024-01-01");

const datastring=new Date("2024-06-12")
const dataId = datastring.getTime() // получаем id дня


// рекурсия
// const arr:any = []
// const fn=(x:number,n:number):number=>{
//   if(n>30){
//     return 0
//   }else{
//     const a = x+fn(x, n+1)
//  return arr.push({id:fn2(a).getTime(), day:fn2(a)})   
//   }
// }

const monsth:any= []
// воскресенье
if(day1_week === 0){
        for(let i=1;i<30; i++){
          monsth.push({id:fn2(i).getTime(), day:fn2(i)})
        }
        for(let i=0;i>-6; i--){
            monsth.unshift(i)
          }
          monsth.splice(0,6, DAY_26, DAY_27,DAY_28,DAY_29,DAY_30,DAY_31)
          return {monsth}
}else if(day1_week === 6){
        for(let i=1;i<31; i++){
          monsth.push({id:fn2(i).getTime(), day:fn2(i)})
        }
      for(let i=0;i>-5; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,5, DAY_27,DAY_28,DAY_29,DAY_30,DAY_31)
      return {monsth}
}else if(day1_week === 5){
  for(let i=1;i<32; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-4; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,4, DAY_28,DAY_29,DAY_30,DAY_31)
      monsth.splice(34,1,DAY_1)
      return {monsth}
}else if(day1_week === 4){
  for(let i=1;i<33; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-3; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,3, DAY_29,DAY_30,DAY_31)
      monsth.splice(33,2, DAY_1,DAY_2,)
      return {monsth}
}else if(day1_week === 3){
  for(let i=1;i<34; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-2; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,2, DAY_30,DAY_31)
      monsth.splice(32,3, DAY_1,DAY_2,DAY_3)
      return {monsth}
}else if(day1_week === 2){
  for(let i=1;i<34; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      for(let i=0;i>-1; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,1, DAY_31)
      monsth.splice(31,4, DAY_1,DAY_2,DAY_3,DAY_4)
      return {monsth}
}else if(day1_week === 1){
  for(let i=1;i<34; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
      monsth.splice(30,5, DAY_1,DAY_2,DAY_3,DAY_4,DAY_5)
      return {monsth}
}
return {monsth}
}