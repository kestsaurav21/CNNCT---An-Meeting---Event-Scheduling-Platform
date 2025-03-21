import React from 'react'
import featureImage from '../../assets/feature-image.png';
import './style.css'

const FeatureSection = ({ features }) => {

  return (
    <div className='feature-section'>
        <section className="features-text">
        {features.map((feature, index) => (
            <div key={index} className="feature">
            <h2 className='feature-title'>{feature.title}</h2>
            <ul>
                {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
                ))}
            </ul>
            </div>
        ))}
        </section>
        <section className="features-image">
          
            <img className="image" src={!features[0].imageUrl || featureImage } alt="feature-image" />
        </section>

    </div>

    
  )
}

export default FeatureSection