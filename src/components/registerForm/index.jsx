import React from "react";
import "./registerForm.css"


function RegisterForm(){
    return(

        <>
        
        <div className="register-form-container">
            <h2>¡Bienvenido!</h2>
            
            <div >
                <form className="form" >
                    <div className="first-column-container">
                    
                        <label  className="form-label" htmlFor="name-and-last-name">Nombres y apellidos:</label>
                        <input type="text" id="name-and-last-name"></input>
                    
                        

                        <label className="form-label" htmlFor="home-address" >Dirección de residencia:</label>
                        <input type="text" id="home-address"></input>

                        
                        <label className="form-label" htmlFor="phone-number">Teléfono:</label>
                        <input type="tel" id="phone-number"></input>

                        <label className="form-label" htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email"></input>

                    </div>

                    <div className="second-column-container">
                        <label className="form-label" htmlFor="user-name">Nombre de usuario:</label>
                        <input type="text" id="user-name"></input>

                        <label className="form-label" htmlFor="password">Contraseña:</label>
                        <input type="password" id="password"></input>

                        <div className="button-container">
                            <button id="submit-button" type="submit">¡Registrarte!</button>
                        </div>
                        
                    </div>
                    
                </form>

            </div>



        </div>
        </>

    );
}

export {RegisterForm};