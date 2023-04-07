import React from "react";
import './LoginUser.css';

function LoginUser(){

    return(
        <>
        
        <div className="login-user-container" >
                
                <div>
                <img src="/src/assets/Logo.png" /> 
                </div>
                
            <p> Login </p>
            <input
                className="user-name inputs"
            />
            <p> Password </p>
            <input
                type={"password"}
                className="user-password inputs"

            />
                <p id="forget-psw"> ¿Olvidaste tu contraseña?</p>
            <div>
                <button className="loginButton" >Iniciar Sesión</button>
            </div>
            

        </div>

        </>

    )

    }

export {LoginUser}