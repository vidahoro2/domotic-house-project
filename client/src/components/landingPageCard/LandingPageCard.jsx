import React from 'react';
import "./landingPageCard.css"

function LandingPageCard({children}){
    return(
        <div className='card-landing-user-page'>
            {children}
        </div>
    )
}
export {LandingPageCard}