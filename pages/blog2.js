import React from 'react'
import Layout from './components/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PostLink = ({titre}) => (
    <li>        
        <Link href={`/blog?titre=${titre}`}>
            {titre}        
        </Link>
    </li>
) 

function Blog() {
    const router = useRouter();
    console.log(router.query)
  return (
    <Layout>
      <h1>Blog</h1>

      <ul>
        <PostLink titre="React" />
        <PostLink titre="vue" />
        <PostLink titre="angular" />
        <PostLink titre="java at home" />
      </ul>
      <h1>{router.query.titre}</h1>
    </Layout>
  )
}

export default Blog;
