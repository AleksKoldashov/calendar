import React, { useState } from "react"


export default function useMyModal (){
    const [open, setOpen] = useState(false)

    return {
        onClick: ()=> setOpen(!open),
        open,
    }
}