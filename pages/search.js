import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { Product, FooterBanner, HeroBanner, SubNavbar } from '../components/index'
import { client } from '../lib/client';
// import  Post  from './post/post'
import { urlFor } from '../lib/client';
import { alpha, Box, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';



const search = ({ products, bannerData }) => {
  let results = products.map(product => product.name)
  // const indResults = results.split('')
  const [userSubmit, setUserSubmit] = useState('');
  const [mySearchResult, setMySearchResult] = useState('')

  const handleChange = (e) => {
    let userInput = e.target.value
    setUserSubmit(userInput)

    return userInput
  }



  const findResult = () => {
    let searchResult = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].toLowerCase().includes(userSubmit) == true) {
        searchResult = results[i] 
        console.log('searched for ' + searchResult)
      }

      // let foundIndex = results.map(str => 
      //   str.toLowerCase().includes(userSubmit) == true ? str == userSubmit: 'not found')
      //   console.log(foundIndex)
    }

    return searchResult
  }
  // setMySearchResult(searchResult)
  // console.log(`${searchResult}`)

  const handleSubmit = (userInput, mySearchResult) => {
    // alert('A search was submitted: ' + userSubmit)
    console.log('user input ' + userSubmit)
    setUserSubmit(userSubmit)

    setMySearchResult(findResult())
    console.log('mySearchResult' + mySearchResult)
    event.preventDefault();
    console.log('found ' + findResult())
  }


  return (
    <div>
      <div className="products-heading">

        <form onSubmit={handleSubmit}>
          
          <InputBase className="input-search" type="text" onChange={handleChange} value={userSubmit}>

          <Button variant="none" type="submit" onChange={handleSubmit} value="submit" onClick={findResult}>
            </Button>
          </InputBase>
          <Search fontSize="large" ml={20} mt={20} mr={20} color="#000000" />

        </form>
      </div>
      <div className="products-heading">

      {<h2>Results for: {userSubmit} </h2>}
      </div>

      <div className="search-container">
        <div className="search-container-column">
          {/* {mySearchResult} */}

          {products?.length > 0 && products?.map(
            ({ _id, name = '', slug = '', image, description, details }) =>
              slug && (
                <Link href={`/product/${slug.current}`}>
                  <div className="left-col">
                    {console.log('name ' + name + ' ' + 'mysearchresult' + mySearchResult)}
                    {(name == mySearchResult) ? (
                      <ul>
                       <li>
                        <img
                          src={urlFor(image && image[0])}
                          width={100}
                          height={200}
                          className="product-image"
                        />
                        </li> 
                        <div className="srch-pag-details">
                        <h3>{name}</h3>
                        <p>{details}</p>
                        </div>
                      </ul>
                      
                    ) : null}
                  </div>
                </Link>
              ))}

        </div>
        <div className="right-col">

        </div>
      </div>
      <div className="products-container">

        {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
      </div>
      
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

export default search

