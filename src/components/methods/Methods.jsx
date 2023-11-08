import styled from "styled-components"

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 360px;
    gap: 20px;

    @media (max-width: 1300px) {  
        margin: 80px 100px;
    }

    @media (max-width: 550px) {  
        margin: 80px 50px;
    }
`

const Title = styled.span`
    text-decoration: underline;
    font-size: 40px;
`

const Text = styled.h3`
    font-weight: lighter;
`

export default function Method({ title, text, text2 }) {
    return(
        <ContainerMain>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Text>{text2}</Text>
        </ContainerMain>
    )
}