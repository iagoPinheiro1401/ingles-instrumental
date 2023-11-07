import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 240px;
`

const TextContainer = styled.h2`
    text-align: center; /* Alinha o texto horizontalmente no centro */
    display: flex;
    justify-content: center; /* Alinha o texto verticalmente no centro */
    align-items: center;
    width: 150vh;
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
`

export default function Presentation() {
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
                    <Li>Filmes e séries</Li>
                    <Li>Músicas</Li>
                    <Li>Livros</Li>
                    <Li>Jogos</Li>
                    <Li>Mini cursos online</Li>
                    <Li>plataformas</Li>
                </Ul>
            </PresentationContainer>
        </MainContainer>
        
    )
}