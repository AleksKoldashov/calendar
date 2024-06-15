import React from "react"
import '../styles/button.css'



export default function useButton (props:any){


    return {
        onClick: ()=>{props()},
  
    }
}