import { useState } from "react"




export default function useMyChexBox (){
const [change, setChange]=useState(false)
const [valuecheck, setValuecheck]=useState('')

    return {
        onChange: ()=>setChange(!change),
        checked: change,
        onClick: (e:any)=>setValuecheck(e.target.value),
        valuecheck
    }
}