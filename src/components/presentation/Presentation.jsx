import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 240px;
    width: 100%;
`

const TextContainer = styled.h2`
    text-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
`

const H2 = styled.h2`
    font-size: 30px;
    font-weight: lighter;
`

const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #439B4E;
    width: 100%;
`

const Li = styled.li`
    font-weight: bold;
    font-size: 25px;
    color: white;
`

const Ul = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 80px 20px;
`

const Img = styled.img`
    position: relative;
    bottom: -104px;
    width: 900px;

    @media (max-width: 1000px) {  
        width: 500px;
        bottom: -58px;
    }

    @media (max-width: 550px) {  
        width: 310px;
        bottom: -36px;
    }
`

export default function Presentation({ filme, musica, livro, jogo, curso, plata }) {
    return(
        <MainContainer>
            <TextContainer>
                <H2>
                    Explore nosso site e descubra técnicas eficazes para aprender inglês. Aprimore suas habilidades com dicas práticas e recursos envolventes. Comece sua jornada de aprendizado conosco hoje. <br/>Let's get started!
                </H2>
            </TextContainer>
            <Img src="english.png"/>
            <PresentationContainer>
                <Ul>
                    <Li filme={filme}>{filme}</Li>
                    <Li musica={musica}>{musica}</Li>
                    <Li livro={livro}>{livro}</Li>
                    <Li jogo={jogo}>{jogo}</Li>
                    <Li curso={curso}>{curso}</Li>
                    <Li plata={plata}>{plata}</Li>
                </Ul>
            </PresentationContainer>
        </MainContainer>
        
    )
}