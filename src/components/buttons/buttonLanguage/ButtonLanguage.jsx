import styled from "styled-components"

const Button = styled.button`
  padding: 0.2rem 0.5rem; 
  font-size: 7px;
  background-color: #008542;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  z-index: 0;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: unset;
  text-decoration: none;
  font-weight: 900;
  transition: all 0.7s cubic-bezier(0,.8,.26,.99);

  &:before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    transition: .7s cubic-bezier(0,.8,.26,.99);
    z-index: -1;
    background-color: #008542!important;
    box-shadow: 0 -4px rgb(21 108 0 / 50%) inset, 0 4px rgb(100 253 31 / 99%) inset, -4px 0 rgb(100 253 31 / 50%) inset, 4px 0 rgb(21 108 0 / 50%) inset;
  }

  &:after {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
    transition: .7s cubic-bezier(0,.8,.26,.99);
  }

  &:hover:before {
    box-shadow: 0 -4px rgb(0 0 0 / 50%) inset, 0 4px rgb(255 255 255 / 20%) inset, -4px 0 rgb(255 255 255 / 20%) inset, 4px 0 rgb(0 0 0 / 50%) inset;
  }

  &:hover:after {
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
  }

  &:active {
    transform: translateY(4px);
  }

  &:active:after {
    box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
  }
`

export default function ButtonLanguage({ onClick }) {
    return(
        <Button onClick={onClick}>trocar idioma</Button>
    )
}