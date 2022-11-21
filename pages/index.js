import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// this allows us to use our custom header html/jsx component
import Header from '../components/Header'
import SimpleHeader from "../components/SimpleHeader"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* now we use our custom header / connect button / nav bar*/}
      {/* <Header/>*/}
      <SimpleHeader/>
        Hello!
    </div>
  )
}
