import Head from "next/head";

// Sections
import Hero from "../components/Hero";
import Services from "../components/Services";
import Survey from "../components/Survey";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ hero }) {
  return (
    <>
      <Head>
        <title>THINMINT | Landing Page</title>
        <link rel="icon" href="../public/CompanyLogo.png" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Survey />
      <Footer />
    </>
  );
}
