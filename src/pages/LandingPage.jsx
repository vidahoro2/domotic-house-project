import React from 'react';
import { HeaderLandingPage } from '../components/headerLandingPage/HeaderLandingPages';
import "./landingPage.css"

function LandingPage(){
    return(
        <div className='landing-page'>
            <HeaderLandingPage/>
        </div>
    )
}
export {LandingPage}