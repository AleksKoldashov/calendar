import React, { useState } from "react"
import '../styles/select.css'


interface iMySelect {
 sel: {
    value: string;
 }
}

export default function useSelect():any{
  
    const [value, setValue]=useState(null)

  
    return {
        defaultValue:'DEFAULT',
        onChange: (e:any) => setValue(e.target.value),
        value, 
        onCh: ()=>{setValue(value)}
    }
}