import Head from 'next/head';
import React from 'react'
import Layout from '../components/layout'

function Items() {
  return (
    <>
      <Head>
          <title>Liste des Items</title>  

          <Layout>
            <h1>items</h1>
          </Layout>
      </Head>    
    </>
  )
}

export default Items;
