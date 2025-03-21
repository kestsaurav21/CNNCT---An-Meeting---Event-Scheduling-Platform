import React from 'react'
import hero from '../../assets/hero-image.png';
import './style.css'

const HeroSection = ({ title, cta, text, description, imageUrl }) => {
  return (
    <div className='hero-section'>
        <h1 className='title'>{title}</h1>
        <button className='primary-button'>{cta}</button>
        <img className='hero-image' src={!imageUrl || hero} alt="hero-image"  />
        <p className='hero-text'>{text}</p>
        <p className='hero-description'>{description}</p>
    </div>
  )
}

export default HeroSection