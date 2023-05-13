import React from "react";
import { HeaderLandingPage } from "../components/headerLandingPage/HeaderLandingPages";
import {Main} from "../components/main";
import { SecondMenu } from "../components/secondMenu";
import { ServiceCard } from "../components/serviceCard";
import "./Services.css"

function Services(){
    return(

        <>
            <HeaderLandingPage/>
            <Main>
                <SecondMenu/>
                <ServiceCard/>
            </Main>
            <footer></footer>
        </>
    )
}

export {Services}