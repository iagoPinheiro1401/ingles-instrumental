import styled from "styled-components"
import { useState } from "react"
import { IoMdAdd } from 'react-icons/io'
import { useSpring, animated } from 'react-spring'

import Scroll from "../scroll/Scroll"

const SideBar = styled(animated.div)`
    background-color: #13531c;
    height: 100%;
    top: 0;
    right: 0;
    position: fixed;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const StyledIcon = styled(animated(IoMdAdd))`
    font-size: 40px;
    position: fixed;
    z-index: 2000;
    cursor: pointer;

    &.rotate {
        transform: rotate(225deg); 
        transition: transform 0.3s ease;
    }
`

const Container = styled.div`
    margin-bottom: 37px;
`

export default function Menu() {

    const [sideBar, setSideBar] = useState(false)
    const [isRotated, setIsRotated] = useState(false);

    const menuAnimation = useSpring({
        opacity: sideBar ? 1 : 0,
        transform: sideBar ? 'translateX(0%)' : 'translateX(100%)',
        config: { tension: 180, friction: 12 },
    });

    const rotationProps = useSpring({
        transform: isRotated ? 'rotate(225deg)' : 'rotate(0deg)',
        config: { tension: 399, friction: 40 },
    });

    const showSideBar = () => {
        setSideBar(!sideBar)
        setIsRotated(!isRotated);
    }



    return(
        <Container>
            <StyledIcon style={rotationProps} onClick={showSideBar}/>
            {sideBar && <SideBar style={menuAnimation} active={sideBar} >
                <Scroll href="#home">Home</Scroll>
                <Scroll href="#serie">Movies and serie</Scroll>
                <Scroll href="#filme">Music</Scroll>
                <Scroll href="#musica">Books</Scroll>
                <Scroll href="#livro">Games</Scroll>
                <Scroll href="#jogo">Mini-courses</Scroll>
                <Scroll href="#curso">Platforms</Scroll>
            </SideBar>}
        </Container>
    )
}