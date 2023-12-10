import styled from "styled-components"

import ButtonLanguage from "../buttons/buttonLanguage/ButtonLanguage"
import Menu from "../menu/Menu"

const HeaderContainer = styled.div`
    background-color: #439B4E;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 1);

    @media (max-width: 1200px) {  
        justify-content: center;
        height: 60px;
    }
`

const Img = styled.img`
    position: relative;
    border-radius: 10px;
    width: 80px;

    @media (max-width: 1200px) {  
        margin: 0;
        width: 45px;
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

    @media (max-width: 500px) {  
        height: 30px;
    }
`

const ButtonsContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
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