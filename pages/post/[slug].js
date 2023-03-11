import { client } from '../../lib/client';
import React from 'react';
import { urlFor } from '../../lib/client';


const Post = ({post}) => {
  
  return (
    <article>
      <div className="post-container">

      <img src={urlFor(post.image)} alt="headphones" className="blog-banner-image" />
      <h1>{post?.title}</h1>
      <h2>{post?.subtitle}</h2>
      <p>{post?.paragraph1}</p>

      <h3>{post?.header1}</h3>
      <p>{post?.paragraph2}</p>
      <h3>{post?.header2}</h3>
      <p>{post?.paragraph3}</p>

      <h2>{post?.callToAction}</h2>


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