import React from "react";
import './LoginUser.css';

function LoginUser(){

    return(
        <>
        
        <div className="login-user-container" >
                
                <div>
                <img src="https://i.pinimg.com/originals/54/4a/52/544a52d2dfbe303094049ccc5d4f53b4.png" /> 
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