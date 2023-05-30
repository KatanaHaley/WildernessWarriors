import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
// import tecknocore from './tecknocore.png';
import { CiSearch } from "react-icons/ci";
import Input from '@mui/material/Input';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
import { Cart } from './';
import { useStateContext } from '../context/StateContext'
import  SearchForm  from './SearchForm';
import Dialog from '@mui/material/Dialog';

const SubNavbar = (product) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="subnavbar-container">
      <p className="logo">
       
      </p>
 
{/*  */}
{/* <Dialog
open={searchOpen}
onClose={()=>setSearchOpen(false)}
maxWidth="xs"
PaperProps={{
  sx:{
    position:'fixed',
    top:10 
  }
}}
sx={{display:{xs:'block', sm:'none'}}}
>

</Dialog> */}
{/* <Link href="/blog">Survival Gear</Link>
<Link href="/blog">Outdoor</Link> */}
{/* <Link href="/blog">Blog</Link> */}
{/* <Link href="/blog">Bags & Kits</Link>
<Link href="/blog">Tutorials</Link> */}

    
    </div>
  )
}

export default SubNavbar