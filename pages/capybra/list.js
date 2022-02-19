import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

import News from '../../components/News'
import {sortByDate} from '../../utils'

import styled from "styled-components"

const ContainerNews = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 1000px;
  margin: auto;
  margin-top: 70px;

  @media (max-width: 1023px) {
   margin-top: 0;
  }
`

export default function Home({posts}) {

  const filteredPosts = posts.map((posts) => {
    if(posts.frontmatter.tag == 'CapyBRA') {
      return posts
    }
  })

  var filtered = filteredPosts.filter(function (el) {
    return el != null;
  });

  return (
    <div>
      <Head>
        <title>Capyvara</title>
      </Head>
      
      <ContainerNews>
        {filtered.map((post, index) => (
            <News key={post.slug} post={post} />
        ))}
        {/* {filtered.length == 0 &&
          <span>
            Ainda não existem publicações para esse tipo de lista!
          </span>
        } */}
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