import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0 100px;

    @media (max-width: 500px) {
        margin: 0 25px;
    }
`

const Text = styled.p`
    font-size: 20px;
`

const Title = styled.h1`
    font-size: 40px;

    @media (max-width: 500px) {
        font-size: 30px;
    }
`

const Img = styled.img`
    width: 70%;
    height: auto;
    display: block;

    @media (max-width: 800px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 350px;
    }
`


const Line = styled.div`
    width: 30%;
    height: 10px;
    border-radius: 10px;
    background-color: #439B4E;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
`

export default function Informations({ title, src, text1, text2, text3, text4, id }) {
    return(
        <Container  id={id}>
            <Line/>
            <TextContainer>
                <Title>{title}</Title>
                <Text>{text1}</Text>
                <Img src={src}/>
                <Text>{text2}</Text>
                <Text>{text3}</Text>
                <Text>{text4}</Text>
            </TextContainer>
        </Container>
    )
}