import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
// import tecknocore from './tecknocore.png';
import { CiSearch } from "react-icons/ci";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Cart } from './';
// import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p>
        <Link href="/">Wilderness Warriors</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() =>
      setShowCart(true)}>
        {/*  onClick="/"> */}
        <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>
    </div>
  )
}

export default Navbar