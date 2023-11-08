import styled from "styled-components"

const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    width: 500px;
    height: 230px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #C9C9C9;
    border-radius: 20px;
    width: 500px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    word-break: break-word;
    height: 350px;
`
const Text = styled.p`
    padding: 20px 20px 40px 20px;
`

export default function CardPlatforms({ src, text }) {
    return(
        <Content>
            <Card>
                <Img src={src}/>
                <Text>{text}</Text>
            </Card>
        </Content>
    )
}