import React, { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';
import UpgradeButton from '../Utilities/UpgradeButton';
import {Box,styled, Typography} from '@mui/material';
import bkgImg from '../../../Images/PremiumBackground.jpg';
import productImage1 from '../../../Images/bg4.svg';
import productImage2 from '../../../Images/bg3.svg';
import productImage3 from '../../../Images/bg1.svg';
import productImage4 from '../../../Images/bg2.svg';
import cardImage1 from '../../../Images/productImage1.jpg';
import cardImage2 from '../../../Images/productImage2.jpg';
import cardImage3 from '../../../Images/productImage3.jpg';
import cardImage4 from '../../../Images/productImage4.jpg';
import TitleText from '../Utilities/TitleText';
// import { width } from '@mui/system';
import { grey } from '@mui/material/colors';
import PremiumCard from './PremiumCard';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
// import CircularAnime from './CircularAnime';
// import {CircularProgress} from '@mui/material';
import LinearProgressBar from './LinearProgressBar.jsx';
import { Container } from '@mui/system';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// part one of premium


const FirstContainer = styled(Box)(
    (theme) => ({
    //   border:'2px solid black',
      width: '100%',
      height:'700px',
      marginLeft:'0',
      paddingLeft:'0',
      paddingRight:'0',
      backgroundImage:`url('${bkgImg}')`,
      color:'white',
      textAlign:'center',
      display:'flex',
    //   opacity: '0.75',
      flexDirection:'column',
    //   alignItems:'center',
      gap:'10px',
      marginTop:'10px'
    }),
  );

  // const darkbackground = grey[900];
  const lightbackground = grey[50];

  const productImageList = [
   productImage1,productImage2,productImage3,productImage4
  ];
  const productInfoTitle=["Increase your productivity","Access all modes","Scan for plagiarism","Compare all mode outputs at once"]
  const productInfoDetail=["Paraphrase more text at once to finish writing faster.","Get maximum control over how you paraphrase.","Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.","Paraphrase in and compare outputs from all seven modes."]
//   part two of premium
// const tickColor = deepOrange[900];

const SecondContainer=styled(Box)(
  (theme) => ({
      //   border:'2px solid black',
        width: '100%',
        // height:'800px',
        margin:'0',
        padding:'0',
        backgroundColor:`${lightbackground}`,
        color:'white',
        textAlign:'center',
        display:'flex',
      //   opacity: '0.75',
        flexDirection:'column',
        alignItems:'center',
        gap:'10px',
      }),
);
 const ServicesFree = ["125 words in the Paraphraser","Standard and Fluency modes","3 synonym options", "1 Freeze word or phrase","1200 words in the Summarizer","Faster processing speed","Advanced grammer rewrites","Compare Modes(Desktop only)","Plagiarism Checker*","Tone detection"];
 const LogoFree = [<DoneIcon sx={{ color: 'green' }} />,<DoneIcon sx={{ color: 'green' }} />,<DoneIcon sx={{ color: 'green' }} />,<DoneIcon sx={{ color: 'green' }} />,<DoneIcon sx={{ color: 'green' }} />,<CloseIcon sx={{ color: 'red' }}/>,<CloseIcon sx={{ color: 'red' }}/>,<CloseIcon sx={{ color: 'red' }}/>,<CloseIcon sx={{ color: 'red' }}/>,<CloseIcon sx={{ color: 'red' }}/>]
 const ServicesPremium = ["Unlimited words in the Paraphraser","Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes","4 synonym options", "Unlimited Freeze words and phrases","6000 words in the Summarizer","Faster processing speed","Advanced grammer rewrites","Compare Modes(Desktop only)","Plagiarism Checker*","Tone detection"];
 const LogoPremium = [<DoneIcon sx={{ color: 'orange' }} />,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>,<DoneIcon sx={{ color: 'orange' }}/>]
// part three
const TitleTextThree=["Formal","Simple","Creative","Shorten","Expnad"];
const DetailTextThree=["Presents text in a more sophisticated and professional way","Presents text in a way most people can understand","Expresses ideas in a completely new way that may change the meaning","Strips away extra words to provide a clear message","Adds more details and depth to increase sentence length"]
const cardImageList=[cardImage1,cardImage2,cardImage3,cardImage4];
//premium component
function Premium(props) {
  const [imgDisp,setImgDisp] = React.useState(0);
  setInterval(()=>{
    if(imgDisp===3){
      setImgDisp(0);
    }else{
      setImgDisp(imgDisp+1);
    }
  },5000);

// const setImgDispHandler=()=>{

// }

const [cardImgIndex,setCardImgIndex] = React.useState(0);
const swipeRightHandler=()=>{
  if(cardImgIndex === 3){
    setCardImgIndex(0);
  }else{
    setCardImgIndex(cardImgIndex+1)
  }
}
const swipeLeftHandler=()=>{
  if(cardImgIndex === 0){
    setCardImgIndex(3);
  }else{
    setCardImgIndex(cardImgIndex-1);
  }
}

  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <FirstContainer>
        {props.children}
        <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',marginBottom:'20px' , marginTop:'20px'}}>
          <TitleText>Save time and write with confidence</TitleText>
          <UpgradeButton buttonclr='seaGreen' serviceYouWant='Upgrade to Premium' width='25%' />
        </Container>
        <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
            <Box width='50%' height='400px'>
                <img width='100%'  height='100%' src={productImageList[imgDisp]} alt="img" />
            </Box>
            <Box width='40%' height='400px' align='left'>
            {productInfoTitle.map((title,index)=>{
                    return (<Box sx={{margin:'20px',align:'left'}} key={index}><Typography color='green'>{title}</Typography>
                    <Typography color='black'>{productInfoDetail[index]}</Typography>
                    {<LinearProgressBar sx={{color:'green'}} />}
                    </Box>)  
                })}
            </Box>
        </Box>
      </FirstContainer>
      <SecondContainer height='800px' sx={{color:'black'}}>
        <TitleText>Experience the full power of QuillBot</TitleText>
        <Box sx={{display:'flex', flexDirection:'row',gap:'2%'}}>
            <PremiumCard LogoPremium={LogoFree} color='green' freeOrPremium='FREE' services={ServicesFree}></PremiumCard>
            <PremiumCard LogoPremium={LogoPremium} color='orange' freeOrPremium='PREMIUM' services={ServicesPremium}></PremiumCard>
        </Box>
        *scan up to 20 pages a month
      </SecondContainer>
      <SecondContainer height='600px'>
        <TitleText>Premium Modes</TitleText>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <KeyboardArrowLeftIcon sx={{ color: "green",fontSize:'80px'}} onClick={swipeLeftHandler}/>
          <img width='400px'  height='400px' src={cardImageList[cardImgIndex]} alt="img" />
          <KeyboardArrowRightIcon sx={{ color: "green",fontSize:'80px'}}  onClick={swipeRightHandler}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
            {TitleTextThree.map((title,index)=>{
                return(<Box key={index} sx={{height:'120px',maxWidth:'100%',width:'18%' }}>
                    <Typography fontWeight='bolder' color='black' textAlign='center'>{title}</Typography>
                    <Typography color='black' textAlign='center'>{DetailTextThree[index]}</Typography>
                    </Box>)
            })}
        </Box>
      </SecondContainer>
      <SecondContainer height='600px'>
        <TitleText>Write better, faster, and clearer instantly</TitleText>
        <Typography color='black'>QuillBot is truested by students, professional writers, and business prople who want to write more effectively.</Typography>
        <Box sx={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-evenly'}}>
        <Box sx={{backgroundColor:'grey',height:'200px',width:'20%'}}> 
            Anime one
        </Box>
        <Box sx={{backgroundColor:'grey',height:'200px',width:'20%'}}>
            Anime two
        </Box>
        <Box sx={{backgroundColor:'grey',height:'200px',width:'20%'}}>
            Anime three
        </Box>
      </Box>
      <UpgradeButton buttonclr='seaGreen' serviceYouWant='Upgrade to Premium' width='25%' />
      <Typography color='black'>100% Money-Back Guarantee</Typography>
      <Typography color='black'>Changes your mind? We'll refund your payment within 3 day of purchase.</Typography>
      <Typography color='black'>Pause Your Subscription</Typography>
      <Typography color='black'>Taking a break? Your subscription also pauses when you do!</Typography>
      </SecondContainer>
      <SecondContainer height='400px' sx={{backgroundColor:'lightGrey'}}>
         {/* <CircularAnime/> */}
      </SecondContainer>
      </Box>
  )
}

export default Premium