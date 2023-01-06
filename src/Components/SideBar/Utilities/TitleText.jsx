import React from 'react'
import { grey } from '@mui/material/colors';
import { Typography,styled } from '@mui/material';
const titleColor = grey[800];

const TitleTypo = styled(Typography)(
  (theme) => ({
      fontSize:'30px',
      color:`${titleColor}`,
  }),
);

function TitleText(props) {
  return (
    <TitleTypo>{props.children}</TitleTypo>
  )
}

export default TitleText
