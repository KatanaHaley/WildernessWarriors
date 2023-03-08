import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// import SubNavbar from './SubNavbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Wilderness Warriors</title>
      </Head>
      <header>
        <Navbar />
        {/* <SubNavbar /> */}
      </header>
      <main className="main-container">
      {children}
      </main>
      <footer>
        <Footer /> 
      </footer>
    </div>
  )
}

export default Layout