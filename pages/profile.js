import React, { useEffect, useState } from 'react'
import Layout from './components/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import useSWR from "swr";
import Head from 'next/head';



function Profile() {
    
    
    const fetcher = url => axios.get(url).then(res => res.data);
    const {data, error} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

    if (!data) return <h1>Chargement ...</h1>

    if(error) return <h1>Une erreur est survenue</h1>

    const styles = {
      padding: 10,
      margin: 10,
      borderBottom: "1px solid #DDD"
    }

  return (
    <>
      <Head>
        <title>Liste des utilisateurs</title>
      </Head>
      <Layout>
        <h1>Cette page utilise le rendu coté clients</h1>
          {
            data && data.map(user => 
              <>
                <div style={styles} key={user.id}>
                  <h1>{user.name}</h1>  
                  <div>Email: {user.email}</div> 
                  <div>Telephone: {user.phone}</div> 
                </div>           
              </>
            )
          }
      </Layout>    
    </>
  )
}



export default Profile
