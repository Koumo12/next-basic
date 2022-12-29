import axios from 'axios';
import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';


function Titre({data}) {
  
   
  return (
    <>
    {
      data && (
        <>
          <Head>
            <title>{data.id}</title>
          </Head>
          <Layout>
              <h1>{data.title}</h1>
              <div>
                <img src />
              </div>
              <p>{data.name}</p>
          </Layout>        
        </>
      )
    }      
    </>
  )
}

export const getStaticPaths = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const data = await axios.get(`${url}`);
  const posts = data;

  const paths = posts.map(
    post => {
      params: {id: post.id}
    }
  )

  return {paths, fallback: true}

}

export const getStaticProps = async ({params}) => {
  const id = params.id;
  const url = "https://jsonplaceholder.typicode.com/users";
  const {categories} = await import ('/data/data.json');
  const data = data.categories.id

  return {
    props: {
      data
    }
  }
}

export default Titre;
