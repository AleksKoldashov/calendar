import React from "react"
import { useAppDispatch } from "../redux/hooks/hooks";
import { update } from "../redux/slice/daySlise";
import './index.css'
interface iItemDay{
    item: number;
    lesson: any;
}

export default function ItemDay (props: iItemDay) {
    const dispatch = useAppDispatch()

    return<>
    <div onClick={()=>{dispatch(update(props.item))}} className="item_day" style={{ border: '1px solid rgba(236, 236, 236, 1)'}}>
        {props.item}
        {props.lesson.map((item:any)=>item?.id===props?.item?<p key={item.id}>{item.a}</p>:null)}
    </div>
    </>
}