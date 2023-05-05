import React from "react";
import { HeaderLandingPage } from "../components/headerLandingPage/HeaderLandingPages";
import { SecondMenu } from "../components/secondMenu";
import { RegisterForm } from "../components/registerForm";
import { Main } from "../components/main";

function ModifyData(){
    return(
        <>
            <HeaderLandingPage/>
            <Main>
                 <SecondMenu/>
                 <RegisterForm title="Modificar mis datos" action="¡Guardar!"/>
            </Main>
            <footer></footer>
        </>
    )
}

export {ModifyData}