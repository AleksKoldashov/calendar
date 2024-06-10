import React from "react";
import '../styles/page/auth.css'
import logo from'../img/page/auth/logo.svg'



export default function Auth(){


    return(
        <div className="auth">
            <div className="content">
                <img src={logo} alt="logo"/>
                <h1>Вход в Sirius Future</h1>
                <form>
                <div className="text-field">
                    <label className="text-field__label"/>
                    <div className="text-field__icon text-field__icon_email">
                        <input className="text-field__input" type="email" placeholder="alexander@itchief.ru" value="alexander@itchief.ru"/>
                    </div>
                    </div>
                    <div className="text-field">
                    <label className="text-field__label"/>
                    <div className="text-field__icon text-field__icon_search">
                        <input className="text-field__input" type="text" placeholder="css" value="css уроки"/>
                    </div>
                    </div>
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