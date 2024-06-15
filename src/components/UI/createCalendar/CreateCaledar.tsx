import React, { useEffect, useState } from "react";
import August from "./August";
import February from "./February";
import Mart from "./Mart";
import June from "./June";
import July from "./July";





export function CreateCaledar (){
   
// 
    const now = new Date()
    const yaer = now.getFullYear()//Год
    const week = now.getDay() // неделя
// 
    
    const monthId = now.getMonth()
    const monthArr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']   
    const [mon, setMon] = useState<any>({monthId, yaer})
    const nowMonth = monthArr[mon.monthId]
    const monthInc=()=>{
        if(mon.monthId <11){
            setMon({...mon,monthId: mon.monthId + 1})
        }else{
            setMon({monthId:0, yaer: mon.yaer+1 })
        }
    }
    const monthDinc=()=>{
        if(mon.monthId>0&&mon.yaer===yaer){
            setMon({...mon,monthId: mon.monthId - 1})
        }else{
            setMon({yaer: mon.yaer-1 ,monthId: 12 - 1})
        }
      
    }
    
const [data, setData]=useState<any>([])  


  
useEffect(()=>{
    if(mon.monthId===0){
        const {monsth}=August(mon)
        setData([])
        setData(monsth)
    }else if(mon.monthId===1){
        const {monsth}=February(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===2){
        const {monsth}=Mart(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===3){
        const {monsth}=June(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===4){
        const {monsth}=July(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===5){
        const {monsth}=June(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===6){
        const {monsth}=July(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===7){
        const {monsth}=August(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===8){
        const {monsth}=June(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===9){
        const {monsth}=July(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===10){
        const {monsth}=June(mon)
        setData([])
        setData(monsth)
    }
    else if(mon.monthId===11){
        const {monsth}=July(mon)
        setData([])
        setData(monsth)
    }
    
}, [mon])


    return {mon, data, monthInc, monthDinc,nowMonth}
}


const test=()=>{

}