import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
import logo from './logo.png';
import { CiSearch } from "react-icons/ci";
import Input from '@mui/material/Input';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
import { Cart } from './';
import { useStateContext } from '../context/StateContext'
import SearchForm from './SearchForm';
import SearchPopup from './SearchPopup';
import { Box } from '@mui/material'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
        <Image
          src={logo}
          alt="Picture of the author"
          width={337}
          height={137}
          lazy="true"
        />
        </Link>
      </p>

      {/*  */}
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

        {/* <SearchForm /> */}
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>

      {/* <SearchPopup /> */}
      </Box>
      <Link href="/blog">Blog</Link>

      <button type="button" className="cart-icon" onClick={() =>
        setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar