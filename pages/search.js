import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { Product, FooterBanner, HeroBanner, SubNavbar } from '../components/index'
import { client } from '../lib/client';
// import  Post  from './post/post'

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
      if(results[i].toLowerCase().includes(userSubmit) == true){
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
  console.log('user input ' +  userSubmit)
  setUserSubmit(userSubmit)

  setMySearchResult(findResult())
  console.log('mySearchResult' + mySearchResult)
  event.preventDefault();
  console.log('found ' + findResult())
}


return (
  <div>
    <div className="products-heading">
      {<h2>Search: {userSubmit} </h2>}
      
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userSubmit}></input>
        <button type="submit" onChange={handleSubmit} value="submit" onClick={findResult}>Submit</button>
      
      </form>
    </div>
    {/* {console.log()} */}
    <div className="search-container">
        Results:
      <div className="search-container-column">
        {`${mySearchResult}`}
        {/* {results && results.map(searchResult => <p>{searchResult}</p>)} */}

        {/* {results && results.map(searchResult => { searchResult })} */}

      </div>
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

export default search

