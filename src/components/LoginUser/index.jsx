import React from "react";
import './LoginUser.css';

function LoginUser(){

    return(
        <>
        
        <div className="login-user-container" >
                <img src="https://i.pinimg.com/originals/54/4a/52/544a52d2dfbe303094049ccc5d4f53b4.png" /> 
            <p> Login </p>
            <input
                className="user-name"
                placeholder="Ingrese su Usuario"
            />
            <p> Password </p>
            <input
                type={"password"}
                className="user-password"
                placeholder="Ingrese su contraseña"
            />

        </div>

        </>

    )

    }

export {LoginUser}