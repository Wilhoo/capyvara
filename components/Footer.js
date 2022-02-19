import Link from 'next/link'
import styled from "styled-components"
import Image from 'next/image'

import LogoTransparentWhite from '../public/assets/logos/logo_transparente_branco.png'

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3a2a5f;
  justify-content: center;
  

  height: 100%;
  width: 100%;

  span {
    color: #fff;
    font-family: 'Roboto';
    text-align: center;
  }

  @media (max-width: 1023px) {
   width: 550px;
  }
`

const ButtonOptions = styled.button`
  padding: 10px;
  color: #FFF;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;

  :hover {
    color: #ffbd59
  }
`

export default function Footer() {
  return (
    <>
      <ContainerFooter>
            <ButtonOptions>Quem somos</ButtonOptions>
            <ButtonOptions>Contato</ButtonOptions>
            <span>Made with ❤️ by Bilho</span>
      </ContainerFooter>
    </>
  )
}

