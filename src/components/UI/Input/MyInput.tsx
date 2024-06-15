import React from "react"
import './index.css'

export default function MyInput ({props}:any){

    return <>
    <div className="text-field">
            <label className="text-field__label"/>
        <div className="text-field__icon text-field__icon_search">
            <input {...props} className="text-field__input"/>
        </div>
    </div>
    </>
}