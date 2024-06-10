import { useState } from "react"
interface iInput {
    placeholder: string
}

export default function useInput(props:iInput){
console.log(props);

    const [value, setValue] =useState('')

    const input=()=>{
    return <>
    <input  {...props} onChange={e=>setValue(e.target.value)} value={value}/>
    </>
    }
    return {input, value}
}

