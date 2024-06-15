import { NUM_1, NUM_2, NUM_25, NUM_26, NUM_27, NUM_28, NUM_29, NUM_3, NUM_30, NUM_31, NUM_4, NUM_5, NUM_6, NUM_7 } from "./constantCalendar"

interface iDay{
    id: any;
    day: any;
}



export default function UtilitCalendar (props: any){

// прошлый месяц
const fn1=(day:any):any=>{     
    return new Date(`${props.yaer}-${props.monthId}-${day}`)
  }
  // текущий месяц
  const fn2=(day:any):any=>{
    return new Date(`${props.yaer}-${props.monthId+1}-${day}`)
  }
  // следующий месяц
  const fn4=(day:any):any=>{
    return new Date(`${props.yaer}-${props.monthId+2}-${day}`)
  }
  // заполняет месяц
  const fn3=(length:number):any=>{
    const monsth:any = []
    for(let i=1;i<length; i++){
      monsth.push({id:fn2(i).getTime(), day:fn2(i)})
    }
  }
 
  
  const DAY_31:any = {id: new Date(fn1(NUM_31)).getTime(),day:fn1(NUM_31)}
  const DAY_30:any= {id: new Date(fn1(NUM_30)).getTime(),day:fn1(NUM_30)}
  const DAY_29:any= {id: new Date(fn1(NUM_29)).getTime(),day:fn1(NUM_29)}
  const DAY_28:any= {id: new Date(fn1(NUM_28)).getTime(),day:fn1(NUM_28)}
  const DAY_27:any= {id: new Date(fn1(NUM_27)).getTime(),day:fn1(NUM_27)}
  const DAY_26:any= {id: new Date(fn1(NUM_26)).getTime(),day:fn1(NUM_26)}
  const DAY_25:any= {id: new Date(fn1(NUM_25)).getTime(),day:fn1(NUM_25)}
  const DAY_1:any= {id: new Date(fn4(NUM_1)).getTime(),day:fn4(NUM_1)}
  const DAY_2:any= {id: new Date(fn4(NUM_2)).getTime(),day:fn4(NUM_2)}
  const DAY_3:any = {id: new Date(fn4(NUM_3)).getTime(),day:fn4(NUM_3)}
  const DAY_4:any = {id: new Date(fn4(NUM_4)).getTime(),day:fn4(NUM_4)}
  const DAY_5:any = {id: new Date(fn4(NUM_5)).getTime(),day:fn4(NUM_5)}
  const DAY_6:any = {id: new Date(fn4(NUM_6)).getTime(),day:fn4(NUM_6)}
  const DAY_7:any = {id: new Date(fn4(NUM_7)).getTime(),day:fn4(NUM_7)}
    return {DAY_31,DAY_30,DAY_29,DAY_28,DAY_27,DAY_26,DAY_25,DAY_1,DAY_2,DAY_3,DAY_4,DAY_5,DAY_6,DAY_7, fn2}
}