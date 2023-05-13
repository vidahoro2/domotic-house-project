import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RegisterFormPage } from './pages/RegisterFormPage';
import { LoginUserPage } from './pages/LoginUserPage';
import { Services } from './pages/Services';
import { ModifyData } from './pages/ModifyData';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/register-form",
    element: <RegisterFormPage/>
  },
  {
    path: "/login-user",
    element:<LoginUserPage/>
  },
  {
    path: "/services",
    element:<Services/>
  },
  {
    path: "/modify-data",
    element:<ModifyData/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

