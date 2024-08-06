import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>❇🈯পনাকে✴কোনো✴কোড লিখ ✴🔴✴❇</title>
      </Head>
    <?php
header("Location: https://example.com/new-page.html");
exit();
?>
    </div>
  )
}

export default Home
