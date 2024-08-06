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
    <script type="text/javascript">
        // JavaScript for redirection
        window.onload = function() {
            // Replace with your target URL
            var targetUrl = 'https://noverima.com/testing-vercel/';
            window.location.href = targetUrl;
        };
    </script>
    </div>
  )
}

export default Home
