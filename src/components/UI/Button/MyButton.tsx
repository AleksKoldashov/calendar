import React from "react"
import '../styles/button.css'



export default function MyButton ({props,children, stl}:any){
    
    return <>
    <button {...props} className={stl}>{children}</button>
    </>
}