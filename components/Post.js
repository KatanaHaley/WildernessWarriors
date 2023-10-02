import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Post = ({ post: { _id, title, slug, image, paragraph1 } }) => {
  return (
    <div>
      <Link href={`/post/${slug.current}`} passHref>
        {/* <Link href={`/`}> */}
        <a>
        <div>
        <img 
          src={urlFor(image && image[0])}
          width={255}
          height={250}
          className="product-image"
        />
        <p>{title}</p>
        <p>{paragraph1}</p>
        </div>
        </a>
      </Link>
    </div>
  )
}

export default Post