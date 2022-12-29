import React from 'react'
import Layout from './components/layout';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const styles= {
  main: {
    padding: 20,
    margin: 20,
    borderBottom: "1px solid #DDD"
  }
}
 

function Blog({data}) {
  return (
    <>
      <Head>
        <title>Liste des catégories de photos</title>
      </Head>
      <Layout>
        <h1>Cette page utilise getStaticProps</h1>
        {
          data.map(ev => 
            <>
              <div key={ev.id} style={styles.main}>
                <h1>{ev.title}</h1>
                <Link href={"/blog/[id]"} as={`/blog/${ev._id}`} >
                  <Image src={ev.image} width={300} height={300} alt=""/>
                </Link>              
              </div>
            </>)
        }
      </Layout>    
    </>
  )
}

export const getStaticProps = async (context) => {
  
  const {categories} = await import ('/data/data.json');

  return {
    props: {
      data : categories
    }

  }
}

export default Blog;
