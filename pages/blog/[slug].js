import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

import styled from "styled-components"

import Header from '../../components/Header'

const ImageCover = styled.img`
  width: auto;
  height: 300px;
  margin-top: 15px;
`;

const BodyNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  align-items: center;

  max-width: 1000px;
  margin: auto;

  margin-top: 70px;
`;

const DetailNews = styled.div`
  display: flex;

  span {
    margin-left: 30px;
    color: #eb9616;
    margin-top: 15px;
    font-weight: bold;
    font-size: 18px;
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin-top: 25px;

  span {
    font-size: 18px;
  }

  p {
    font-size: 22px;
    font-family: sans-serif;
  }

  img {
    max-height: 500px;
    max-width: 600px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: 'Yeseva One', cursive;
  margin-top: 15px;
  font-size: 40px;
`;

const Subtitle = styled.h2`
  font-family: 'Yeseva One', cursive;
  color: #aaa;
`;


// #7e709b
// #ffbd59


export default function NewsContent({frontmatter: {title, excerpt, date, cover_image, author}, frontmatter, slug, content}) {
  return (
    <>
      <Header />
      <BodyNews>
        <Title>{title}</Title>
        <Subtitle>{excerpt}</Subtitle>
        <DetailNews>
          <span>{author}</span>
          <span>{date}</span>
          <span>Horário 20:20</span>
        </DetailNews>
        <ImageCover src={cover_image} />
        <MainText dangerouslySetInnerHTML={{__html: marked
          (content)}}>
        </MainText>
      </BodyNews>
    </>
  )
}

export async function getStaticPaths () {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({params: {slug}}) {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
  slug + '.md'), 'utf-8')

  const {data:frontmatter, content} = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    }
  }
}
