import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
       <p className="logo">
        <Link href="/">
        <Image
          src={logo}
          alt="wilderness warrior logo"
          width={337}
          height={137}
          lazy="true"
        />
        </Link>
      </p>
      <p>2023 Wilderness Warriors All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer