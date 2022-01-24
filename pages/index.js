import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Services from '../components/Services';
import Survey from '../components/Survey';

export default function Home({ hero }) {

  return (
    <>
      <Head>
        <title>Taskia | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Survey />


    </>
  )
}
