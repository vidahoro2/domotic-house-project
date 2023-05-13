import React from "react";
import "./RegisterFormPage.css"
import { RegisterForm} from "../components/registerForm";
import { HeaderLandingPage } from "../components/headerLandingPage/HeaderLandingPages";
import { Main } from "../components/main";


function RegisterFormPage(){

    return(
        <>
            

            <HeaderLandingPage></HeaderLandingPage>
            <Main>
                <RegisterForm ></RegisterForm>
            </Main>
            <footer></footer>
        </>

    )
}

export {RegisterFormPage}