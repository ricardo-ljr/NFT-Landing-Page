import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Services from '../components/Services';
import Survey from '../components/Survey';

export default function Home({ hero }) {

  return (
    <>
      <Head>
        <title>NIFTY | Landing Page</title>
        <link rel="icon" href="../public/CompanyLogo.png" />
      </Head>

      <Hero />
      <Services />
      <Survey />


    </>
  )
}
