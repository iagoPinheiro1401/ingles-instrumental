import styled from "styled-components"

import ButtonLanguage from "../buttons/buttonLanguage/ButtonLanguage"
import Menu from "../menu/Menu"

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
    position: relative;
    border-radius: 15px;
    width: 100px;

    @media (max-width: 1200px) {  
        margin: 0;
        width: 60px;
    }
`

const Imgcontainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Line = styled.div`
    height: 50px;
    width: 2px;
    background-color: black;
`

const ButtonsContainer = styled.div`
    width: 200px;
    display: flex;
    gap: 20px;
    position: relative;
    right: 0;
    margin-right: 20px;

    @media (max-width: 450px) {  
        margin-right: 50px;
    }
`

export default function Header({ onClick }) {
    return(
        <>
        <HeaderContainer>
            <Imgcontainer>
                <Img src="ifcee.png"/>
            </Imgcontainer>
            <ButtonsContainer>
                <ButtonLanguage onClick={onClick}/>
                <Line/>
                <Menu/>
            </ButtonsContainer>
        </HeaderContainer>
        </>
    )
}