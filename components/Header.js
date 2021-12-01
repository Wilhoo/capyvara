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
    height: 150px !important;

    bottom: 80px !important;

    max-height: none;
  }
`

const ButtonOptions = styled.a`
  padding: 10px;
  color: #FFF;
  margin: 12px 10px;
  border: none;
  background-color: transparent;
  font-family: 'Yeseva One', cursive;
  font-size: 16px;
  text-decoration: none;

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
          <div style={{position: 'relative'}}>
            <Link href='/'> 
              <Image
                src="/assets/logos/logo_transparente_branco.png"
                alt="My Image"
                width={185}
                height={165}/> 
            </Link>
          </div>
          <ButtonOptions href='/filmes_series/list'>Filmes/Séries</ButtonOptions>
          <ButtonOptions href='/capybra/list'>CapyBRA</ButtonOptions>
          <ButtonOptions href='/curiosidades/list'>Curiosidades</ButtonOptions>
          <ButtonOptions href='/musica/list'>Música</ButtonOptions>
          <ButtonOptions href='/leitura/list'>Leitura</ButtonOptions>
          <ButtonOptions href='/manual_gz/list'>Manual da G-Z</ButtonOptions>
          <InputSearch placeholder='Digite o que procura'></InputSearch>
      </ContainerHeader>
    </>
  )
}

