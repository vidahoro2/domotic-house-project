import React from "react";
import "./style.css"
import {Link} from "react-router-dom"

function HeaderLandingPage(){
    return(
        <header className="header-landing-page">
            <div className="figure-conntainer">
                <figure>
                    <img src="/src/assets/Logo.png"></img>
                </figure>
            </div>
            <div className="sesion-container">
                <Link to="/login">INICIAR SESIÓN</Link>
                <figure>
                    <img src="/src/assets/userLogo.png"></img>
                    
                </figure>
            </div>
        </header>
    )
}
export {HeaderLandingPage}