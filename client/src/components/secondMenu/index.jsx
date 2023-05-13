import React from "react";
import "./secondMenu.css"

function SecondMenu(){
    return(
        <>
            <div className="second-menu-container">
                 <div className="sm-button"> <p>My Domotic House</p> </div>
                 <div className="sm-button"><p>Manual de Usuario</p></div>
                 <div className="sm-button"><p>Configuración</p></div>
                 <div className="sm-button"><p>Ranking</p></div>
                 <div className="sm-button"><p>Habitas</p></div>
                 <div className="sm-button"><p>Cerrar Sesión</p></div>
                 
               
            </div>

        </>
    )
}

export {SecondMenu}