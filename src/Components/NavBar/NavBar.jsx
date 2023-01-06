import React from 'react'
import './NavBar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import image1 from '../../Images/Robots-Square.jpg';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import { green } from '@mui/material/colors';

const headerColor='seaGreen';
function NavBar(props) {
  // light and dark theme
  const [lightMode,setMode] = useState(true);
  const setModeHandler=()=>{
    setMode(!lightMode);
  }
  // hide and show Sidebar
  const [hideSidebar,setShowSidebar] = useState(true);
  const setShowSidebarHandler=()=>{
    setShowSidebar(!hideSidebar);
  }

  return (
    <AppBar className='header' position="fixed" sx={{
      zIndex: props.space+1,
      backgroundColor:`${headerColor}`,
    }}>
      <Toolbar sx={{justifyContent:'space-between'}}>
      <Box className='headerLeft' sx={{display:'flex'}}>
        <Box style={{cursor:'pointer'}} onClick={setShowSidebarHandler} sx={{marginRight:'10%'}}>
          {hideSidebar?<DensityMediumIcon onClick={props.handleDrawerOpen}/>:<ChevronLeftIcon onClick={props.handleDrawerClose}/>}</Box>
        <Box sx={{marginRight:'5%'}}>
          <img width="30px" height="30px" src={image1} alt='logo'/>
        </Box>
        <Typography sx={{marginRight:'5%',fontSize:'150%'}}>QuillBot</Typography>
      </Box>
      <Box className='headerMid'>QuillBot Premium</Box>
      <Box className='headerRight' sx={{display:'flex'}} >
        <ListItemIcon>
        <LanguageIcon/>
        </ListItemIcon>
        <ListItemIcon onClick={setModeHandler}>
          {lightMode?<LightModeIcon/>:<Brightness3Icon/>}
        </ListItemIcon>
        <ListItemIcon className='profile'>
          <AccountCircleRoundedIcon/>
        </ListItemIcon>
      </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar