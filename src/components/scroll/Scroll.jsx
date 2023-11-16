
import styled from "styled-components"

const ScrollButton = styled.a`
    padding: 10px 20px;
    border: 2px solid #439B4E;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #439B4E;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 150px;

    :hover {
        background-color: #439B4E;
        color: white;
        transition: background-color 0.3s ease;
    }

    @media (max-width: 750px) {  
        padding: 5px 10px;
    }
`

export default function Scroll({ children, href, id}) {


    return(
        <ScrollButton id={id} href={href}>
            {children}
        </ScrollButton>
)
}