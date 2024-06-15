import './index.css'

export default function MyChexBox ({props, title}:any){

    return <label className="checkbox style-b">
    <input type="checkbox" {...props} value={title}/>
    <div className="checkbox__checkmark"></div>
    <div className="checkbox__body" >{title}</div>
</label>
}