import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Product, FooterBanner, HeroBanner, SubNavbar } from '../components/index'
import { client } from '../lib/client';
import { Popup } from '../components/Popup'
// import  Post  from './post/post'
// import { useUser } from '@auth0/nextjs-auth0/client';

const Home = ({ products, bannerData }) => {
  // const { user, error, isLoading } = useUser();

  return (
    <div>
    {/* <a href='/api/auth/login'>Login</a> */}
{/* {console.log(user.name)} */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          {/* <Popup /> */}
        <h2>Best Selling Products</h2>
        <p>Top Selections</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      {/* <Post /> */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home