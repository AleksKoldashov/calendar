import React, { useState } from "react";
import { iAUg } from "./August";



export default function February (props:iAUg){




const day1_week = new Date(props.yaer,props.monthId,1).getDay()

const num = 31
const num1= 30
const num2= 29
const num3= 28
const num4= 27
const num5= 26
const num6= 25
const num7= 1
const num8= 2
const num9 = 3
const num10 = 4
const num11 = 5
const num12 = 6
const num13 = 7
const monsth:number []= []
// воскресенье
if(props.yaer%4===0){ //весакосный год
    if(day1_week === 0){
        for(let i=1;i<30; i++){
            monsth.push( i)
          }
          for(let i=0;i>-6; i--){
            monsth.unshift(i)
          }
          monsth.splice(0,6, num5, num4,num3,num2,num1,num)
        return {monsth}
}else if(day1_week === 6){
    for(let i=1;i<31; i++){
        monsth.push( i)
      }
      for(let i=0;i>-5; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,5, num4,num3,num2,num1,num)
      monsth.splice(34,1,num7)
      return {monsth}
}else if(day1_week === 5){
    for(let i=1;i<32; i++){
        monsth.push( i)
      }
      for(let i=0;i>-4; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,4, num3,num2,num1,num)
      monsth.splice(33,2, num7,num8,)
      return {monsth}
}else if(day1_week === 4){ //четверг
    for(let i=1;i<33; i++){
        monsth.push( i)
      }
      for(let i=0;i>-3; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,3, num2,num1,num)
      monsth.splice(32,3, num7,num8,num9)
      return {monsth}
}else if(day1_week === 3){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      for(let i=0;i>-2; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,2, num1,num)
      monsth.splice(31,4, num7,num8,num9,num10)
      return {monsth}
}else if(day1_week === 2){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      for(let i=0;i>-1; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,1, num)
      monsth.splice(30,5, num7,num8,num9,num10,num11)
      return {monsth}
}else if(day1_week === 1){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      monsth.splice(29,6, num7,num8,num9,num10,num11, num12)
      return {monsth}
}
}else{ // Обычный
    if(day1_week === 0){
        for(let i=1;i<30; i++){
            monsth.push( i)
          }
          for(let i=0;i>-6; i--){
            monsth.unshift(i)
          }
          monsth.splice(0,6, num5, num4,num3,num2,num1,num)
          monsth.splice(34, 1, num7)
          return {monsth}
}else if(day1_week === 6){ //суббота
    for(let i=1;i<31; i++){
        monsth.push( i)
      }
      for(let i=0;i>-5; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,5, num4,num3,num2,num1,num)
      monsth.splice(33,2,num7, num8)
      return {monsth}
}else if(day1_week === 5){
    for(let i=1;i<32; i++){
        monsth.push( i)
      }
      for(let i=0;i>-4; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,4, num3,num2,num1,num)
      monsth.splice(32,3, num7,num8,num9)
      return {monsth}
}else if(day1_week === 4){ //четверг
    for(let i=1;i<33; i++){
        monsth.push( i)
      }
      for(let i=0;i>-3; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,3, num2,num1,num)
      monsth.splice(31,4, num7,num8,num9, num10)
      return {monsth}
}else if(day1_week === 3){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      for(let i=0;i>-2; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,2, num1,num)
      monsth.splice(30,5, num7,num8,num9,num10,num11)
      return {monsth}
}else if(day1_week === 2){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      for(let i=0;i>-1; i--){
        monsth.unshift(i)
      }
      monsth.splice(0,1, num)
      monsth.splice(29,6, num7,num8,num9,num10,num11, num12)
      return {monsth}
}else if(day1_week === 1){
    for(let i=1;i<34; i++){
        monsth.push( i)
      }
      monsth.splice(28,7, num7,num8,num9,num10,num11, num12, num13)
  
      return {monsth}
}
}

return {monsth}
}