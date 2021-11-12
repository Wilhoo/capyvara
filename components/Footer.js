import Link from 'next/link'
import styled from "styled-components"
import Image from 'next/image'

import LogoTransparentWhite from '../public/assets/logos/logo_transparente_branco.png'

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3a2a5f;
  justify-content: center;
  

  /* height: 150px; */
  width: 100%;

  span {
    color: #fff;
    font-family: 'Yeseva One', cursive;
    text-align: center;
  }
`

const PositionInfos = styled.div`
  display: flex;
  flex-direction: column;

  
`

const ButtonOptions = styled.button`
  padding: 10px;
  color: #FFF;
  margin: 10px;
  border: none;
  background-color: transparent;
  font-family: 'Yeseva One', cursive;
  font-size: 16px;

  :hover {
    color: #ffbd59
  }
`

const InputSearch = styled.input`
  padding: 10px;
  height: 50px;
  margin-top: 8px;
  border-radius: 15px;
`;

const Logo = styled.img`
  height: 165px;
  margin-top: -50px;
`;


export default function Footer() {
  return (
    <>
      <ContainerFooter>
            <ButtonOptions>Quem somos</ButtonOptions>
            <ButtonOptions>Contato</ButtonOptions>
            <ButtonOptions>Equipe</ButtonOptions>
            <span>Made with ❤️ by Bilho</span>
      </ContainerFooter>
    </>
  )
}

