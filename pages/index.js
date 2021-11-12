import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

import News from '../components/News'
import {sortByDate} from '../utils'

import styled from "styled-components"

const ContainerNews = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  max-width: 1000px;
  margin: auto;
  margin-top: 70px;
`

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Capyvara</title>
      </Head>
      
      <ContainerNews>
        {posts.map((post, index) => (
            <News post={post} />
        ))}
      </ContainerNews>
    </div>
  )
}

export async function getStaticProps() {
  //Pega arquivos do diretório 'posts'
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', 
    filename), 'utf-8')

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })


  return {
    props: {
      posts,
      posts: posts.sort(sortByDate),
    }
  }
}