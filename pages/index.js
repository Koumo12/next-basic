import  React, { useEffect } from "react";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";



const Home = ({data}) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #000" 
  }

 
  
  return (
    <>
      <Head>
        <title>Liste des Régions</title>
      </Head>
      <Layout>
        <h1>Cette page utilise getServerSideProps</h1>
        {data.map(region => 
            <>
              <div style={styles} >
                <Link key={region.code} href={"/region/[code]"} as={`/region/${region.code}`} passHref>
                  <h1>{region.nom}</h1>
                  <p>{region.code}</p>
                </Link>
              </div>
            </>
          )
        }
      </Layout>    
    </>
  )
}

export async function getServerSideProps(context)
{
  
  const {data} = await axios.get(`${process.env.API_GEO}/regions`)
  
  return {
    props: {
      data,
    }
  }
}

export default Home;