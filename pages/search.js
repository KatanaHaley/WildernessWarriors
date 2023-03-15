import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { Product, FooterBanner, HeroBanner, SearchBar } from '../components/index'
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import Link from 'next/link'

const search = ({ products, input }) => {
  const [inputSearch, setInputSearch] = useState([]);
  const { image, name, details, price } = products;



  const handleChange = (e) => {
      setInputSearch({ search: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSearch(inputSearch)

  }

  const searchProducts = () => {

    products.map(
    ({name, price, details, image, slug, _id, title }) => 
    // console.log('search: ', inputSearch.search, name.toLowerCase())
    inputSearch.search ==  name.toLowerCase() ? name : console.log("no match found")
  )
    }

    searchProducts()

  return (
   
      <div className="search-page-container">
        <form>
        <label htmlFor="search">Search</label>
        <input placeholder="Search" onChange={handleChange}></input>
        <button onClick={() => {handleSubmit}}>Submit</button>
        </form>
        <p>{inputSearch.search}</p>
        {console.log(inputSearch.search)}
        {products.length > 0 && products.map(
            ({name, price, details, image, slug, _id, title }) => 
            // console.log('search: ', inputSearch.search, name.toLowerCase())
            {inputSearch.search ==  name.toLowerCase() ? 
<p>match found</p>
: <p>no match found</p>
            }
        )}
      </div>
   
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const productQuery = '*[_type == "name"]';
  const productData = await client.fetch(productQuery);
  return {
    props: { products, productData }
  }
}

export default search

// {posts.length > 0 && posts.map(
//   ({ _id, title = '', slug = '', _createdAt = '', image, paragraph1 }) =>
//     slug && (
//       <div key={_id} className="blog-page-card">
//        <img src={urlFor(image)} alt="blog images" className="blog-page-images" />
//          <div className="blog-page-date">
//          {new Date(_createdAt).toDateString()}
//          </div>
//          {/* {console.log(_createdAt)} */}
//         <Link href="/post/[slug]" as={`/post/${slug.current}`}>
//           <div className="blog-post-title">
//             {title}
//           </div>
//         </Link>{' '}
//         <div className="blog-intro-text">
//             {paragraph1.split(" ").splice(0, 11).join(" ")}...
//             {console.log(paragraph1)}
//         </div>
//         <Button color="secondary" variant="outlined" size="small">Read more</Button>
//       </div>
//     )
// )}