import styled from "styled-components"


const HeaderContainer = styled.div`
    background-color: #439B4E;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    position: fixed;
`

const Img = styled.img`
    margin: 0 350px 0 70px;
    position: relative;
    border-radius: 15px;
`

const Text = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 50px;
`

export default function Header() {
    return(
        <>
            <HeaderContainer>
                <Img src="ifcee.png" width="100px"/>
                <Text>Métodos de aprendizagem da língua inglesa</Text>
            </HeaderContainer>
        </>
    )
}