import React, { useState } from "react";
import Auth from "./page/Auth";
import './styles/app.css'
import Calendar from "./page/Calendar";
import Profil from "./page/Profil";
import { NavLink, Outlet } from "react-router-dom";
import logo from './img/page/auth/logo.svg'
import icon_1 from './img/app/icons/icon_1.svg'
import icon_2 from './img/app/icons/icon_2.svg'
import IconSvg from "./img/app/Icon_svg";
// import icon_3 from './img/app/icons/icon_3.svg'
// import icon_4 from './img/app/icons/icon_4.svg'
// import icon_5 from './img/app/icons/icon_5.svg'
// import icon_6 from './img/app/icons/icon_6.svg'
// import icon_7 from './img/app/icons/icon_7.svg'
// import icon_8 from './img/app/icons/icon_8.svg'
// import icon_9 from './img/app/icons/icon_9.svg'








function App() {
  const [on, setOn] = useState("item_menu")
  
  const {icon_11, icon_12} = IconSvg()

  const arrSidebar = [
    {id: 1, title: 'Главная', icon: icon_11(), url: '/profil'},
    {id: 2, title: 'Расписание', icon:icon_12(), url:'/calendar'},
    {id: 3, title: 'Оплата', icon:'icon_3', url:'/calendar'},
    {id: 4, title: 'Достижения', icon:'icon_4', url:'/calendar'},
    {id: 5, title: 'Тренажер', icon: 'icon_5', url:'/calendar'},
    {id: 6, title: 'Библиотека', icon: 'icon_6', url:'/calendar'},
    {id: 7, title: 'Проверка связи', icon: 'icon_7', url:'/calendar'},
    {id: 8, title: 'Настройки', icon: 'icon_8', url:'/calendar'},
    {id: 9, title: 'Вопросы', icon: 'icon_9', url:'/calendar'},
  ]

const onCL=()=>{
  console.log('sdsd');
  setOn("item_menu_hover")
}
const onCL2=()=>{
  console.log('sdsd');
  setOn("item_menu")
}
console.log('sdsd', on);

  return (
    <div className="app">
      <div className="header_app"></div>
      {/* sidebar */}
      <div className="sidebar_app">
        <div className="header_sidebar">
            <img src={logo} alt="logo"/>
            <h4>Sirius Future</h4>
        </div>
        <div className="content_sidebar">
          {
            arrSidebar.map((item)=><div className='item_menu '  >
                <NavLink to={item.url} className="item">
                  {/* <img src={item.icon}  alt="icon" /> */}
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
            </div>)
          }
              
        </div>
        <div className="foter_sidebar"></div>
        
      </div>
       {/* sidebar */}
      <div className="content_app">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
