import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import configData from '../../data/config.json';
import HeroSection from '../../components/HeroSection';
import FeatureSection from '../../components/FeatureSection';
import Testimonials from '../../components/Testimonials';
import Integration from '../../components/Integrations';
import Footer from '../../components/Footer';

const Home = () => {

    const [ data, setData ] = useState(null);

    useEffect( () => {
        setData(configData);
    }, []);

    if(!data) return <p>Loading...</p>;
    return (
    <div className='home-container'>
        <Header />
        <HeroSection title={data.hero.title} cta={data.hero.cta} text={data.hero.text} description={data.hero.description} imageUrl={data.hero.imageUrl} />
        <FeatureSection features={data.features} />
        <Testimonials testimonials={data.testimonials} />
        <Integration integrations={data.integrations} />
        <Footer links={data.footer.links} text={data.footer.text}  />
    </div>
  )
}

export default Home