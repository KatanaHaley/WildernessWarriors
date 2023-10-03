import { client } from '../../lib/client';
import React, { useState } from 'react';
import { urlFor } from '../../lib/client';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';


const Post = ({ post }) => {
  const { title, _createdAt, callToAction, image, body } = post;

  console.log('this is the post component: ' + post.title)
  return (
    <article>
      <div className="post-container">
      <div className="image-container">
            <img src={urlFor(image)} className="blog-banner-image" />
          </div>
        
          <p>Published: {new Date(_createdAt).toDateString()}</p>
          <h2>{title}</h2>
          <PortableText value={body} />
          {console.log(post.body)}
            {/* <pre>{JSON.stringify(body.body, null, 2)}</pre> */}


      </div>
    </article>
  )
}

// export async function getStaticPaths() {
//   const paths = await client.fetch(
//     `*[_type == "post" && defined(slug.current)][].slug.current`
//   )

//   return {
//     paths: paths.map((slug) => ({params: {slug}})),
//     fallback: true,
//   }
// }

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }
  `;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: { 
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

// export async function getStaticProps(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.params
//   const post = await client.fetch(`
//     *[_type == "post" && slug.current == $slug][0]
//   `, { slug })
  
//   return {
//     props: {
//       post
//     }
//   }
// }

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const postsQuery = '*[_type == "post"]'
  
  const post = await client.fetch(query);
  const posts = await client.fetch(postsQuery);

  // console.log(product);

  return {
    props: { posts, post }
  }
}

export default Post

