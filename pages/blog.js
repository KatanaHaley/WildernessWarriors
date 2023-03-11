import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components/index'
import { client } from '../lib/client';
import { urlFor } from '../lib/client';

import { useRouter } from 'next/router'
import Link from 'next/link'

const Blog = ({ posts }) => {
  
    return (
        <div className="blog-container">
        <h1>Wilderness Warrior Blog</h1>


        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '', image }) =>
            slug && (
              <div key={_id}>
               <img src={urlFor(image)} alt="headphones" className="blog-page-images" />

                {console.log(image)}
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  {title}
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </div>
            )
        )}
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