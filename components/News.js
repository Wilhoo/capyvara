/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import styled from "styled-components"

import { Row, Container, Col } from 'react-bootstrap'

import Window from '../assets/window.jpeg'

const PureContainer = styled.div`
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
   flex-direction: column;
  }
`;

const ImageAdjust = styled.img`
  max-height: 240px;
  max-width: 400px;
  width: 100%;

  @media (max-width: 1023px) {
   max-width: 100%;
  }
`;

const Tag = styled.span`
  font-family: 'Roboto';
  font-size: 17px;
  color: #7e709b;
  font-weight: 700;
`

const TitleNews = styled.h3`
  font-family: 'Roboto';
  font-weight: bold;
  color: #000;

  @media (max-width: 1023px) {
    font-size: 23px;
  }
`

const SideContent = styled.div`
  margin-left: 25px;

  @media (max-width: 1023px) {
    margin-left: 0px;
  }
`

const LinkNews = styled.a`
  text-decoration: none;

  @media (max-width: 1023px) {
   width: 540px;
  }
`;

export default function News({post}) {
  return (
    <LinkNews href={`/blog/${post.slug}`}>
      <PureContainer>
        <ImageAdjust src={post.frontmatter.cover_image} />
        <SideContent>
          <Tag>{post.frontmatter.tag}</Tag>
          <TitleNews>{post.frontmatter.title}</TitleNews>
        </SideContent>
      </PureContainer>
    </LinkNews>
  )
}

