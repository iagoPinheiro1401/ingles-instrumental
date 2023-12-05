import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Text = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export default function Informations() {
    return(
        <Container>
            <Text>
                <h1>Países que falam a língua inglesa</h1>
                <p>
                    A língua inglesa é conhecida como uma língua universal, que une povos e torna possível a comunicação em diversos lugares do mundo. É um idioma comumente usado em viagens, negócios e várias outras áreas. Mesmo que uma pessoa não fale inglês, ela usa muitas palavras no dia a dia, o que mostra quanta influência o idioma possui. 
                    Uma pergunta comum é: quantos países falam inglês? A resposta parece simples de responder, basta checar as línguas oficiais de cada nação. Com essa lógica, encontramos 54 países que falam o inglês como língua nativa ou segundo idioma. 
                </p>
                <img src="port.png"/>
                <p>
                    No entanto, a resposta pode ficar incompleta, porque existem muitos países que as pessoas usam muito o inglês, mesmo não sendo uma língua oficial. Segundo dados da plataforma Statista, em 2023, há 1,5 bilhão de falantes do inglês — o número exato é de 1,456 bilhão. Esse número inclui os nativos ou pessoas que adquiriram o inglês como segunda língua.
                    Os Estados Unidos têm uma população de 333 milhões de pessoas, sendo o país que possui o maior número de falantes da língua. Os resultados são de 2022, compartilhados pelo Banco Mundial.
                    No ranking de línguas mais faladas do mundo, após o mandarim e o hindi, vem o inglês, em terceiro lugar. Por causa disso, os 54 países que têm inglês como língua oficial possuem uma grande diversidade linguística.
                </p>
            </Text>
        </Container>
    )
}