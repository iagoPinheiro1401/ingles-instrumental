import styled from "styled-components"
import { useState } from "react"

import ButtonLanguage from "../buttons/buttonLanguage/ButtonLanguage"

const HeaderContainer = styled.div`
    background-color: #439B4E;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    @media (max-width: 1200px) {  
        justify-content: center;
        height: 100px;
    }
`

const Img = styled.img`
    margin: 0 350px 0 70px;
    position: relative;
    border-radius: 15px;
    width: 100px;

    @media (max-width: 1200px) {  
        margin: 0;
        width: 60px;
    }
`

const Text = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 50px;

    @media (max-width: 1200px) {  
        display: none;
    }
`

export default function Header({ onClick }) {
    return(
        <>
        <HeaderContainer>
            <Img src="ifcee.png"/>
            <Text>Métodos de aprendizagem da língua inglesa</Text>
            <ButtonLanguage onClick={onClick}/>
        </HeaderContainer>
        </>
    )
}