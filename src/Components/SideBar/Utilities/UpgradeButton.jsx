import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';

var widthbtn = "";
var buttonColor='seaGreen';
const MyButton = styled(Button)(
        (theme) => ({
          width: `${widthbtn}`,
          paddingLeft:'14px',
          paddingRight:'14px',
          background:`${buttonColor}`,
          color:'white',
          whiteSpace: 'nowrap',
          borderRadius:'15px',
          boxSizing: 'border-box',
         '&:hover':{
            background:`${buttonColor}`,
          }
        }),
      );


function UpgradeButton(props) {
    widthbtn = props.width;
    buttonColor=props.buttonclr;

  return (
    <MyButton widthbtn={props.width}>{props.serviceYouWant}</MyButton> 
  )
}

export default UpgradeButton;