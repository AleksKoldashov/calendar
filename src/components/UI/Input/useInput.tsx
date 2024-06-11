import { useState } from "react"
import './styles/useinput.css'
interface iInput {
    required:boolean;
    placeholder: string;
}


export default function useInput( required:any, placeholder:any, type:any){
   
    const [value, setValue] =  useState ('')
    const [error, setError] =  useState<any> (null)
    
     return {
         value,
         placeholder,
         error,
         type, 
         onChange: (e:any) => setValue(e.target.value),
         onBlur: (e:any) => {
             if(!e.target.value && required) setError('Required field')
             else setError(null)
         }
     }
    }