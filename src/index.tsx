import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Profil from './page/Profil';
import Calendar from './page/Calendar';
import Payment from './page/Payment';
import Auth from './page/Auth';
import MyModal from './components/UI/Modal/MyModal';


const router = createBrowserRouter([
  {
    element: <App/>,
    path: '/',
    errorElement: <ErrorPage/>,
    children:[
      {
        element: <Profil/>,
        path:'/profil',
    },
    {
      element: <Calendar/>,
      path:'/calendar',
  },
  {
    element: <Auth/>,
    path:'/payment',
}
  ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
<React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
  
);


