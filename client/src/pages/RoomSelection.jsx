import React from "react";
import { HeaderLandingPage } from '../components/headerLandingPage/HeaderLandingPages';
import "./RoomSelection.css"
import {Main} from "../components/main";
import { RoomsCards } from "../components/roomsCards";
import { SecondMenu } from "../components/secondMenu";
import { RoomName } from "../components/roomName";

function RoomSelection() {

    return(
    <>
            <HeaderLandingPage/>
        <Main>
            
            <SecondMenu/>
            <RoomName name={'Valencia'}/>
            <RoomsCards 
            roomName1={"Habitación"}
            roomName2={"Sala Comedor"}
            roomName3={"Cocina"}

            />

        </Main>
    </>
        


    )
    
}

export {RoomSelection}