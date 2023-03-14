import { client } from '../../lib/client';
import React, { useState } from 'react';
import { urlFor } from '../../lib/client';
import Image from 'next/image'

const Post = ({post}) => {
  const {createdAt, title, subtitle, callToAction, paragraph1, paragraph2, paragraph3, header1, header2, image } = post;

  console.log(post)
  return (
    <article>
      <div className="post-container">
      <div className="image-container">
            {/* <img src={urlFor(post?.image) || urlFor(image)} className="blog-banner-image" /> */}
          </div>
        
        {/* <p>{post.createdAt}</p> */}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{paragraph1}</p>

      <h3>{header1}</h3>
      <p>{paragraph2}</p>
      <h3>{header2}</h3>
      <p>{paragraph3}</p>

      <h2>{callToAction}</h2>


      </div>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  
  return {
    props: {
      post
    }
  }
}

export default Post