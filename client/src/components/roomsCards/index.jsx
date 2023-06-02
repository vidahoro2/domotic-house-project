import React from "react";
import './roomsCards.css'

function RoomsCards(props){
    return(
        <div className="cards-container">
            <div className="card">
                <h2 className="card-title">{props.roomName1}</h2>
                <div className="card-image">
                    <img className="img-card" src="/src/assets/image3.png"/>
                </div>
            </div>
            <div className="card">
                <h2 className="card-title">{props.roomName2}</h2>
                <div className="card-image">
                    <img className="img-card" src="src\assets\image4.png"/>
                </div>
            </div>
            <div className="card">
                <h2 className="card-title">{props.roomName3}</h2>
                <div className="card-image">
                    <img className="img-card" src="src\assets\image5.png"/>
                </div>
            </div>
            
        </div>
    )
}


export {RoomsCards}