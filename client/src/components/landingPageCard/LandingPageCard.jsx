import React from 'react';
import "./landingPageCard.css"

function LandingPageCard({children}){
    return(
        <div className='card'>
            {children}
        </div>
    )
}
export {LandingPageCard}