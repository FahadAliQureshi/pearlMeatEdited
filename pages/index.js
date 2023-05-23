import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Section from "../Components/Section";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Secttion2 from "../Components/Secttion2";
import styles from "../styles/Home.module.css";
import ContactQurbani from "./ContactQurbani";


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Pearl Meat</title>
        <meta name="description" content="Pearl Meat" />
        <link rel="icon" href="../public/logo.png" />
      </Head>
      <Header />
      <Banner />
      <Section />
      <Secttion2 />
      <Section4 />
      <Section3 />
      <Contact />
      <Footer />
    </div>
   
  );
}
