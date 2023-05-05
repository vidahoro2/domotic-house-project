import React from "react";
import "./serviceCard.css"

function ServiceCard(){
    return(
        <>

            <h2 className="service-title">Configuración</h2>
            <div className="service-card-container">
                <div className="service-card">
                        <p>Mi Cuenta <br></br> Modificar mis datos</p>
                        <img src='/src/assets/personas_1.png'></img>
                </div>
                <div className="service-card">
                        <p>Servicio al Cliente</p>
                        <img src='/src/assets/agente-de-atencion-al-cliente_1.png'></img>
                </div>
                <div className="service-card">
                                <p>Elegir servicios</p>
                                <img src='/src/assets/cara-feliz_1.png'></img>
                </div>
                <div className="service-card">
                                <p>Conexión</p>
                                <img src='/src/assets/internet_1.png'></img>
                </div>



            </div>

        </>

    )
}

export {ServiceCard}