import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h2>{discount} until {saleTime}</h2>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <div className="footer-product-desc">
          <p>{desc}</p>
          </div>

          

        </div>
        <img 
          src={urlFor(image)} className="footer-banner-img"
          // width="672"
          // height="378"   
        />
        <div className="right">
          <h3>{midText}</h3>
          <p>{smallText}</p>

          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner