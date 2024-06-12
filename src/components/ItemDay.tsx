import React from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { update } from "../redux/slice/daySlise";
import './index.css'
interface iItemDay{
    item: number;
}

export default function ItemDay (props:any) {
    const dispatch = useAppDispatch()
    const les = useAppSelector(state=>state.day.less)

    return<>
    <div onClick={()=>{dispatch(update(props.item.id))}} className="item_day" style={{ border: '1px solid rgba(236, 236, 236, 1)'}}>
        {props.item.day.getDate()}
        {les?.map((item:any)=>item.id===props.item.id?<p>{item.title}</p>: null)}
    </div>
    </>
}