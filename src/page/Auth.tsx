import React from "react";
import '../styles/page/auth.css'
import logo from'../img/page/auth/logo.svg'
import useInput from "../components/UI/Input/useInput";
import MyInput from "../components/UI/Input/MyInput";
import MyChexBox from "../components/UI/CheckBox/MyCheckBox";
import useMyChexBox from "../components/UI/CheckBox/useMyChexBox";
import MyButton from "../components/UI/Button/MyButton";
import useMyModal from "../components/UI/Modal/useMyModal";
import MyModal from "../components/UI/Modal/MyModal";




export default function Auth(){
const placeholder_email = 'E-mail'
const placeholder_password = 'Пароль'        
const inp_email = useInput(true, placeholder_email, 'email')
const inp_password = useInput(true, placeholder_password, 'password')
const checkbox = useMyChexBox()
const modal = useMyModal()
const modal1 = useMyModal()



    return(
        <div className="auth">
            <div className="content">
                <img src={logo} alt="logo"/>
                <h1>Вход в Sirius Future</h1>
                {/* <form> */}
                <MyInput props={inp_email}/>
                <MyInput props={inp_password}/>
                <MyChexBox title='Запомнить меня' props={checkbox}/> 
                <MyButton props={modal} children='Войти' stl="btn_auth"/>
                <MyModal props={modal} content={<p>Modal1</p>}/>
                <MyButton props={modal1} children='Войти' stl="btn_auth"/>
                <MyModal props={modal1} content={<p>Modal2</p>}/>
                {/* </form> */}
                <div className="block_1">
                    <a href="/">Я забыл пароль</a>
                    <a href="/">Войти как тренер</a>
                </div>
                <div className="block_2">
                    <button  style={{color:'black'}}>Нет аккаунта?</button>
                    <a  href="/">зарегестрироваться</a>
                </div>
                <div  className="lang">
                    <a href="/">ru</a>
                    <a href="/">en</a>
                </div>
            </div>
        </div>
    )
}