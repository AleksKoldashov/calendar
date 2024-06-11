import React from "react";
import '../styles/page/auth.css'
import logo from'../img/page/auth/logo.svg'
import useInput from "../components/UI/Input/useInput";
import MyInput from "../components/UI/Input/MyInput";



export default function Auth(){
const placeholder_email = 'E-mail'
const placeholder_password = 'Пароль'        
const inp_email = useInput(true, placeholder_email, 'email')
const inp_password = useInput(true, placeholder_password, 'password')

    return(
        <div className="auth">
            <div className="content">
                <img src={logo} alt="logo"/>
                <h1>Вход в Sirius Future</h1>
                <form>
                <MyInput props={inp_email}/>
                <MyInput props={inp_password}/>
                    <label className="checkbox style-b">
                        <input type="checkbox"/>
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__body">Запомнить меня</div>
                    </label>
                <button className="btn_auth">Войти</button>
                </form>
                <div className="block_1">
                    <a href="/">Я забыл пароль</a>
                    <a href="/">Войти как тренер</a>
                </div>
                <div className="block_2">
                    <a  href="/" style={{color:'black'}}>Нет аккаунта?</a>
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