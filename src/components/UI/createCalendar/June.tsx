import React, { useState } from "react";
import { iAUg } from "./August";
import { NUM_29, NUM_30, NUM_31 } from "./constantCalendar";



export default function June (props:iAUg){

const day1_week = new Date(props.yaer,props.monthId,1).getDay()
const dateNow = new Date
const pars = Date.parse("2024-01-01");

const datastring=new Date("2024-06-12")
const dataId = datastring.getTime() // получаем id дня


const fn1=(day:any)=>{
  return new Date(`${props.yaer}-${props.monthId}-${day}`)
}
const fn2=(day:any)=>{
  return new Date(`${props.yaer}-${props.monthId+1}-${day}`)
}

const fn3=(length:number)=>{
  for(let i=1;i<length; i++){
    monsth.push({id:fn2(i).getTime(), day:fn2(i)})
  }
}
// new Date(`${props.yaer}-${props.monthId+1}-${i}`)

const DAY_31 = {id: new Date(fn1(NUM_31)).getTime(),day:fn1(NUM_31)}
const DAY_30= {id: new Date(fn1(NUM_30)).getTime(),day:fn1(NUM_30)}
const DAY_29= {id: new Date(fn1(NUM_29)).getTime(),day:fn1(NUM_29)}
const num3= {id: new Date(`${props.yaer}-${props.monthId}-28`).getTime(),day:new Date(`${props.yaer}-${props.monthId}-28`)}
const num4= {id: new Date(`${props.yaer}-${props.monthId}-27`).getTime(),day:new Date(`${props.yaer}-${props.monthId}-27`)}
const num5= {id: new Date(`${props.yaer}-${props.monthId}-26`).getTime(),day:new Date(`${props.yaer}-${props.monthId}-26`)}
const num6= {id: new Date(`${props.yaer}-${props.monthId}-25`).getTime(),day:new Date(`${props.yaer}-${props.monthId}-25`)}
const num7= 1
const num8= 2
const num9 = 3
const num10 = 4
const num11 = 5
const monsth:any= []
// воскресенье
if(day1_week === 0){
      fn3(NUM_30)
        for(let i=0;i>-6; i--){
            monsth.unshift(i)
          }
          monsth.splice(0,6, num5, num4,num3,DAY_29,DAY_30,DAY_31)
          return {monsth}
}else if(day1_week === 6){
      fn3(NUM_31)
      for(let i=0;i>-5; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,5, num4,num3,DAY_29,DAY_30,DAY_31)
      return {monsth}
}else if(day1_week === 5){
    for(let i=1;i<32; i++){
        monsth.push( i)
      }
      for(let i=0;i>-4; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,4, num3,DAY_29,DAY_30,DAY_31)
      monsth.splice(34,1,num7)
      return {monsth}
}else if(day1_week === 4){
    for(let i=1;i<33; i++){
        monsth.push( i)
      }
      for(let i=0;i>-3; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,3, DAY_29,DAY_30,DAY_31)
      monsth.splice(33,2, num7,num8,)
      return {monsth}
}else if(day1_week === 3){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      for(let i=0;i>-2; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,2, DAY_30,DAY_31)
      monsth.splice(32,3, num7,num8,num9)
      return {monsth}
}else if(day1_week === 2){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      for(let i=0;i>-1; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,1, DAY_31)
      monsth.splice(31,4, num7,num8,num9,num10)
      return {monsth}
}else if(day1_week === 1){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      monsth.splice(30,5, num7,num8,num9,num10,num11)
      return {monsth}
}
return {monsth}
}