import React from "react"


export default function MySelect({props}:any){
    return<>
        <select {...props} >
        <label className="text-field__label"/>
            <option value="DEFAULT" disabled >Выбрать</option>
            <option value="Арифметика">Ментальная Арифметика</option>
            <option value="Программирование">Программирование</option>
            <option value="Скорочтение">Скорочтение</option>
        </select>
 
      
    </>
}