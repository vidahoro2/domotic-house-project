import React from "react";
import { HeaderLandingPage } from '../components/headerLandingPage/HeaderLandingPages';
import "./RoomSelection.css"
import {Main} from "../components/main";
import { RoomsCards } from "../components/roomsCards";
import { SecondMenu } from "../components/secondMenu";
import { RoomName } from "../components/roomName";
import { Basicfooter } from "../components/Basicfooter/Basicfooter";

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

        <Basicfooter/>
    </>
        


    )
    
}

export {RoomSelection}