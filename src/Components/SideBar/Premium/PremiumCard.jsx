// import React from 'react'
// import { Box, Typography ,styled} from '@mui/material'
// import Divider from '@mui/material/Divider';
// import UpgradeButton from '../Utilities/UpgradeButton';
// const PremiumCardStyled = styled(Box)(
//     (theme) => ({
//     //   border:'2px solid black',
//       width: '40%',
//       height:'300px',
//       margin:'0',
//       padding:'1%',
//       backgroundColor:'red',
//       color:'black',
//       textAlign:'center',
//       display:'flex',
//       flexDirection:'column',
//       alignItems:'center',
//     //   gap:'10px',
//     //   marginTop:'10px'
//     }),
//   );

// function PremiumCard() {
//   return (
//     <PremiumCardStyled>
//         <UpgradeButton width="80%"/>
//         <Divider/>
//         <Typography>hi</Typography>
//         <Divider/>
//         <Typography>hi</Typography>
//         <Divider/>
//         <Typography>hi</Typography>
//         <Divider/>
//         <Typography>hi</Typography>
//         <Divider/>
//     </PremiumCardStyled>
//   )
// }

// export default PremiumCard

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box,styled } from '@mui/material';
import UpgradeButton from '../Utilities/UpgradeButton';

const style = {
  width: 400,
  maxWidth: 400,
  bgcolor: 'background.paper',
  color:'black'
};

export default function ListDividers(props) {
  return (
    <Box>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <Box textAlign='left' p='5px' borderRadius='7px' backgroundColor={props.color}>{props.freeOrPremium}</Box>
    <Box p='5px' backgroundColor='white'><UpgradeButton serviceYouWant={props.freeOrPremium} buttonclr={props.color} width='90%'></UpgradeButton></Box>
    <Divider/>
        {props.services.map((service,index)=>{
            return(
                <ListItem key={index} sx={{height:'10%'}}  divider>
                    {props.LogoPremium[index]}
                    <ListItemText>{service}</ListItemText>
                </ListItem>
            )
        })}
      <Box p='5px' borderRadius='7px'  backgroundColor='grey'>No credit card required</Box>
    </List>
    </Box>
  );
}