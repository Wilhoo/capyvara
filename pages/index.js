import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

import News from '../components/News'
import {sortByDate} from '../utils'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

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
  const [search, setSearch] = useState()
  const [flagSearch, setFlagSearch] = useState(false)
  const [postsSearched, setPostsSearched] = useState()

  const { asPath } = useRouter()

  useEffect(() => {
    if (posts) {
      localStorage.setItem("posts", JSON.stringify(posts))
    }
  }, [posts])

  useEffect(() => {
    if(asPath.includes('search')) {
      setSearch(localStorage.getItem('searchValue'))

      const valueSearch = posts.map((key) => {
        if(key.frontmatter.title.includes(search) && search) {
          return key
        }
      })

      var filteredSearch = valueSearch.filter(function(el) { return el; });

      setPostsSearched(filteredSearch)
    }
  }, [asPath, posts, search])

  return (
    <div>
      <Head>
        <title>Capyvara</title>
      </Head>
      
      <ContainerNews>
        {
          postsSearched != undefined && postsSearched.length > 0  ?
          postsSearched.map((post, index) => (
            <News key={post.slug} post={post} />
          )):
          posts.map((post, index) => (
            <News key={post.slug} post={post} />
        ))
        }
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