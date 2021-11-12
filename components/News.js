import Link from 'next/link'
import styled from "styled-components"

import Window from '../assets/window.jpeg'

const Container = styled.div`
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
`;

const ImageAdjust = styled.img`
  max-height: 240px;
  max-width: 400px;
  width: 100%;
`;

const Tag = styled.span`
  font-size: 17px;
  color: #7e709b;
  font-weight: 700;
`

const TitleNews = styled.h3`
  font-family: 'Yeseva One', cursive;
  color: #000;
`

const SideContent = styled.div`
  margin-left: 25px;
`

const LinkNews = styled.a`
  text-decoration: none;
`;

export default function News({post}) {
  return (
        <LinkNews href={`/blog/${post.slug}`}>
          <Container>
            <ImageAdjust src={post.frontmatter.cover_image} />
            <SideContent>
              <Tag>{post.frontmatter.tag}</Tag>
              <TitleNews>{post.frontmatter.title}</TitleNews>
            </SideContent>
          </Container>
        </LinkNews>
  )
}

