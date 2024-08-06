import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>testing xd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <img width="1080" height="720" src="img.jpg" alt="Icon Image"/>
    <meta http-equiv="refresh" content="0; url=https://noverima.com/testing-vercel/">
    </div>
  )
}

export default Home
