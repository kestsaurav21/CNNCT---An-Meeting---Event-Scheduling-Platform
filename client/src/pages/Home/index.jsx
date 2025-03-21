import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import configData from '../../data/config.json';
import HeroSection from '../../components/HeroSection';
import FeatureSection from '../../components/FeatureSection';

const Home = () => {

    const [ data, setData ] = useState(null);

    useEffect( () => {
        setData(configData);
    }, []);

    if(!data) return <p>Loading...</p>;
    return (
    <div>
        <Header />
        <HeroSection title={data.hero.title} cta={data.hero.cta} text={data.hero.text} description={data.hero.description} />
        <FeatureSection features={data.features} />
    </div>
  )
}

export default Home