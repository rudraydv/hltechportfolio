import React from 'react';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/testimonials';
import PricingPlans from '../components/PricingPlans';
import Enroll from '../components/Enroll';


const Home = () =>{
    return(
        <>
       <Layout>
        <HeroSection/>
        <Marquee/>
        <Services/>
        <Newsletter/>
        <Testimonials/>
        <PricingPlans/>
        <Enroll/>
       </Layout>
        </>
    );
};
export default Home;