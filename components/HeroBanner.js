import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      
      
        <h1>{heroBanner.largeText2}</h1>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>

        <div>
          <div className="desc">
        <img src={urlFor(heroBanner.image)} alt="backpack stool" className="hero-banner-image" />
        <p className="beats-solo">{heroBanner.smallText}</p>

            <h5>{heroBanner.desc}</h5>
          </div>        
        </div>
      
    </div>
  )
}

export default HeroBanner