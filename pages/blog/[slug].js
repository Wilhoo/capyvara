import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import { useState, useEffect } from 'react';

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

  max-width: 800px;
  margin: auto;

  background: #fff;
  margin-top: 70px;
  
  h6 {
    color: #a7a7a7;
  }

  @media (max-width: 1023px) {
   width: 550px;
   margin-top: 0;
  }
`;

const DetailNews = styled.div`
  display: flex;

  span {
    font-family: 'Roboto';
    margin-left: 30px;
    color: #eb9616;
    margin-top: 15px;
    font-weight: bold;
    font-size: 18px;
  }
`;

const MainText = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 950px;
  margin-top: 25px;

  span {
    font-size: 18px;
  }

  p {
    font-size: 21px;
    font-family: sans-serif;
  }

  img {
    max-height: 500px;
    max-width: 600px;
    text-align: center;

    @media (max-width: 1023px) {
      max-width: 500px;
    }

    @media (min-width: 1023px) {
      width: 75%;
      margin: auto;
      display: block;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Roboto';
  margin-top: 15px;
  font-size: 45px;
  margin-left: 20px;
`;

const Subtitle = styled.h2`
  font-family: 'Roboto';
  color: #a7a7a7;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`;


// #7e709b
// #ffbd59


export default function NewsContent({frontmatter: {title, excerpt, date, cover_image, legend, author}, content}) {
  return (
    <>
      {/* <Header /> */}
      <BodyNews>
        <Title>{title}</Title>
        <Subtitle>{excerpt}</Subtitle>
        <DetailNews>
          <span>{author}</span>
          <span>{date}</span>
        </DetailNews>
        <ImageCover src={cover_image} />
        <h6>{legend}</h6>
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
