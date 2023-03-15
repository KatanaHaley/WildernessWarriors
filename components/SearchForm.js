import React from 'react'
import { alpha, Box, InputBase } from '@mui/material'
import { Search } from '@mui/icons-material';
// import theme from '../../utils/theme'
import SearchPopup from './SearchPopup';

const SearchForm = () => {
  return (
    <div>
        
        <Box
        sx={{
            position:'relative',
            backgroundColor: '#ffffff',
            mr: 2,
            ml: 3,
        }}
        className="search-box"
        >
            <Box
            sx={{
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            </Box>

            <Box component="form" display='flex'>
                <InputBase 
                placeholder="Search"
                autoFocus="true"
                size="large"
                />
                <SearchPopup /> 

            </Box>
        </Box>
        
    </div>
  )
}

export default SearchForm