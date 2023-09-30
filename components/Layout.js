"use client"

import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import SubNavbar from './SubNavbar';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Wilderness Warriors</title>
      </Head>
        <UserProvider>
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      <main className="main-container">
      {children}
      </main>
      <footer>
        <Footer /> 
      </footer>
        </UserProvider>
    </div>
  )
}

export default Layout