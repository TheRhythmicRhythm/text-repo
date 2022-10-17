import Head from "next/head";
import  NavBar  from "../components/NavBar";
import  HomeCard  from "../components/HomeCard";
import AboutCard from "../components/AboutCard";
import ServicesCard from "../components/ServicesCard";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactCard from "../components/ContactCard";
import FooterCard from "../components/FooterCard";



export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>The Crypto Doyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <HomeCard />
      <AboutCard />
      <ServicesCard />
      <PricingCard />
      <TestimonialCard />
     
      <ContactCard />
      <FooterCard />
      </div>
    
  );
}

