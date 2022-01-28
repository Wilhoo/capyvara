import Link from 'next/link'
import styled from "styled-components"
import Image from 'next/image'

import { GiMagnifyingGlass } from 'react-icons/gi';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import LogoTransparentWhite from '../assets/capyvara_logo_transparente_branco_low_hight.png'
import { Container, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

export default function Header2() {
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
    <Navbar style={{backgroundColor: '#3a2a5f'}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
          src={LogoTransparentWhite}
          alt="Capyvara e Cia"
          height={70}
          width={160}
          /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link style={{color: '#FFF'}} href='/filmes_series/list'>Filmes/Séries</Nav.Link>
            <Nav.Link style={{color: '#FFF'}} href='/capybra/list'>CapyBRA</Nav.Link>
            <Nav.Link style={{color: '#FFF'}} href='/curiosidades/list'>Curiosidades</Nav.Link>
            <Nav.Link style={{color: '#FFF'}} href='/musica/list'>Música</Nav.Link>
            <Nav.Link style={{color: '#FFF'}} href='/leitura/list'>Leitura</Nav.Link>
            <Nav.Link style={{color: '#FFF'}} href='/manual_gz/list'>Manual da G-Z</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Faça a sua busca"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <GiMagnifyingGlass size={25}/>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

