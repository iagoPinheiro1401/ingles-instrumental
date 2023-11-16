import styled from "styled-components"

const Button = styled.button`
    background-color: #14471b;
    border: 0;
    width: 70px;
    padding: 7px 0;
    border-radius: 5px;
    color: white;
    transition: background-color 0.3s ease;
    cursor: pointer;

    :active {
        background-color: #73e082;
    }
`

export default function ButtonLanguage({ onClick }) {
    return(
        <Button onClick={onClick}>trocar idioma</Button>
    )
}