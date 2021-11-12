import Link from 'next/link'
import styled from "styled-components"
import Image from 'next/image'

import LogoTransparentWhite from '../public/assets/logos/logo_transparente_branco.png'

const ContainerHeader = styled.div`
  display: flex;
  background-color: #3a2a5f;
  justify-content: center;
  height: 70px;

  position: fixed;
  top: 0;
  width: 100%;

  img {
    width: 200px !important;
  }
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


export default function Header() {
  return (
    <>
      <ContainerHeader>
          
          <Link href='/'> 
            <Image
              src="/assets/logos/logo_transparente_branco.png"
              alt="My Image"
              width={185}
              height={165}/> 
          </Link>
          <ButtonOptions>Filmes/Séries</ButtonOptions>
          <ButtonOptions>CapyBRA</ButtonOptions>
          <ButtonOptions>Curiosidades</ButtonOptions>
          <ButtonOptions>Música</ButtonOptions>
          <ButtonOptions>Leitura</ButtonOptions>
          <ButtonOptions>Manual da G-Z</ButtonOptions>
          <InputSearch placeholder='Digite o que procura'></InputSearch>
      </ContainerHeader>
    </>
  )
}

