import Link from 'next/link'
import styled from "styled-components"
import Image from 'next/image'

import { GiMagnifyingGlass } from 'react-icons/gi';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

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

    bottom: 85px !important;

    max-height: none;
  }
`

const ButtonOptions = styled.a`
  padding: 10px;
  color: #FFF;
  margin: 16px 10px;
  border: none;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-decoration: none;

  :hover {
    color: #ffbd59
  }
`

const ButtonOptionsSearch = styled.a`
  position: relative;
  padding: 10px;
  color: #000;
  top: 7px;
  right: 55px;
  margin: 16px 10px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-decoration: none;

  :hover {
    color: #7e709b
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
  const [search, setSearch] = useState()
  const [flagSearch, setFlagSearch] = useState(false)
  const [getURL, setGetURL] = useState()

  const { asPath } = useRouter()

  useEffect(() => {
    setGetURL(window.location.origin)
  }, []);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        window.location = `${getURL}/?search=${search}`
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [search]);


  const saveSearch = () => {
    localStorage.setItem("searchValue", search)
    setFlagSearch(!flagSearch)
  }

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
          <form>
            <InputSearch id="submit" placeholder='Faça a sua busca' value={search} onInput={e => setSearch(e.target.value)}></InputSearch>
            <ButtonOptionsSearch onClick={saveSearch} href={`${getURL}/?search=${search}`}><GiMagnifyingGlass size={25}/></ButtonOptionsSearch>
          </form>
      </ContainerHeader>
    </>
  )
}

