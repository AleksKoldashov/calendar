import React from "react"
import './index.css'

export default function MyModal ({props, content}:any){


    return <>
    <div className="modal"{...props} style={{display: props.open ? 'block': 'none'}}>
        <div className="modal-content">
            <span className="close" >&times;</span>
          {content}
        </div>
    </div>
    </>
}