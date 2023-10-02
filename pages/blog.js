import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components/index'
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Blog = ({ posts }) => {
  
    return (
        <div>
        <div className="blog-container">
        <h1>Wilderness Warrior Tutorials</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', _createdAt = '', image, subtitle, category, body }) =>
            slug && (
              <div key={_id} className="blog-page-card">
               <img src={urlFor(image)} alt="blog images" className="blog-page-images" />
                 <div className="blog-page-date">
                 {new Date(_createdAt).toDateString()}
                 </div>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <div className="blog-post-title">
                    {title} 
                  </div>
                </Link>{' '}
                  <div>
                    <Button color="info"><h4>Category: {category}</h4></Button>
                  </div>
                  {subtitle}
                <div className="blog-intro-text">
                    {/* {body.split(" ").splice(0, 11).join(" ")}... */}
                </div>
                {/* {category} */}

                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <Button color="secondary" variant="outlined" size="small">Read more</Button>     
                </Link>{' '}
           
              </div>
            )
        )}
      </div>
        </div>
    )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  const postQuery = '*[_type == "title"]';
  const postData = await client.fetch(postQuery);
  return {
    props: { posts, postData }
  }
}

export default Blog