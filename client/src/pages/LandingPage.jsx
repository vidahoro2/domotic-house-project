import React from 'react';
import { HeaderLandingPage } from '../components/headerLandingPage/HeaderLandingPages';
import { LandingPageCard } from '../components/landingPageCard/LandingPageCard';
import "./landingPage.css";

import RectangleImage from '../assets/Rectangle.png';

function LandingPage(){
    return(
        <div className='landing-page'>
            <HeaderLandingPage/>
            <main>
                <LandingPageCard>
                    <h2 className='title-card-one'>¿QUE ES DOMOTIC HOUSE?</h2>
                    <p className='paragraph-card'>Domotic House es una empresa que se encarga de mejor la vida de la persona utilzando la tecnologia IoT.Permitiendo la automatizacion del hogar</p>
                </LandingPageCard>
                <LandingPageCard>
                    <figure className='card-figure'>
                        <img src={RectangleImage} alt="Rectangle"></img>
                    </figure>
                    <button className='card-input'>¡INTERACTUA CON NOSTROS AQUÍ!</button>
                </LandingPageCard>
                <LandingPageCard>
                    <strong className='title-card-two'>¿QUIÉNES SOMOS?</strong>
                    <p className='paragraph-card'>Somos un grupo de emprendedores, estudiantes del programa de  Ingeniería Electrónica y Telecomunicaciones de la Universidad del Cauca.</p>
                </LandingPageCard>
            </main>
            <footer></footer>
        </div>
    )
}
export {LandingPage}