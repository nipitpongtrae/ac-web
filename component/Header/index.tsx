import { Box, Button, Hidden, Link, MenuItem, MenuList, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import HomeIcon from '@mui/icons-material/Home'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';;
import BedIcon from '@mui/icons-material/Bed';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import RoomDropdown from './RoomDropdown';
import Dropdown from '../Input/Dropdown';


const HeaderWarper = styled(Box)(`
    z-index:99;
    min-width: 450px !important;
    width:100%;
    height:3rem;

    position:fixed;
    top:0;
    left:0;

    display:flex;
    background-color: #212121;

    .LeftBox{
        
        height:3rem;

        text-align : start; 

        font-family:roboto;

        .Logo{
            width:auto;
            padding:8px 20px 3px 20px;
            color:white;
            font-weight:1000;

            cursor:pointer;
            
            .spanlogo{
                color:#b81a15;
            }
        }

    }

    .RightBox{
        
;        width: calc(100% -90px);
        height:60px;

        text-align : start;
    }

    .NavButton{
        border:none;
        background: transparent ;
        height:3rem;
        color:#606060;

    }

    .NavButton:hover{
        color:#ffffff;
        
    }

    .smNavButton{
        color:#606060;

    }
    .smNavButton:hover{
        color:#ffffff;
        
    }
    
`)
const Header = () => {

    const [offset, setOffset] = useState(0);

    const [displayHeader, setdisplayHeader] = useState(true);
  
      useEffect(() => {
          const onScroll = () =>{ 
            console.log(offset); 
            if(offset<window.pageYOffset){
              console.log("offset"); 
              setdisplayHeader(false)
            }else{
              setdisplayHeader(true)
            }
            setOffset(window.pageYOffset);
          }
          // clean up code
          window.removeEventListener('scroll', onScroll);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
      }, [offset]);
          
  return (
    <HeaderWarper  

    className={(displayHeader)?"HeaderfadeIn":"HeaderfadeOut"}>
        <Link sx={{
            textDecoration:'none',
        }} href="./">
        <Box className='LeftBox' >
            <Typography className='Logo' variant='h5'>
                <span className='spanlogo'>A</span>C <Hidden smDown>HABITAT</Hidden>
            </Typography> 
        </Box>
        </Link>
        <Box className='RightBox'>
            <Hidden smDown>
            <Dropdown 
                name={"ROOM"}
                chiledren={ (onclick:any)=>{
                    return(
                    <div>
                        <Link sx={{
                            textDecoration:'none',color:'#181D31','&:hover':{color:'#181D31'}
                        }} href="./KingSizeRoom"><MenuItem onClick={onclick} >King Size Room</MenuItem></Link>
                        <Link sx={{
                            textDecoration:'none',color:'#181D31','&:hover':{color:'#181D31'}
                        }} href="./QueenSizeRoom"><MenuItem onClick={onclick} href="./QueenSizeRoom">Queen Size Room</MenuItem></Link>
                    </div>
                    )
                } 
                }
            />
            <Dropdown 
                name={"FACILITY"}
                chiledren={ (onclick:any)=>{
                    return(
                    <div>
                        <Link sx={{
                            textDecoration:'none',color:'#181D31','&:hover':{color:'#181D31'}
                        }} href="./Fitness"><MenuItem onClick={onclick}>FITNESS</MenuItem></Link>
                        <Link sx={{
                            textDecoration:'none',color:'#181D31','&:hover':{color:'#181D31'}
                        }} href="./MeetingRoom"><MenuItem onClick={onclick}>MEETING ROOM</MenuItem></Link>
                    </div>
                    )
                } 
                }
            />
            
            <Button href='./Contract' className='NavButton'>CONTRACT</Button>
            
            </Hidden>
            <Hidden smUp>
            <Button className='smNavButton' ><BedIcon/></Button>
            <Button className='smNavButton' ><FitnessCenterIcon/></Button>
            <Button className='smNavButton' ><InfoIcon/></Button>
                
            </Hidden>
            <Button variant='contained' sx={{
                position:'fixed',
                top:0,
                right:0,

                borderRadius:0,
                boxShadow:'none',
                backgroundColor:'#5c7a6b',
                height:'3rem',
                "&:hover":{
                    backgroundColor:'#536a5e',
                }
            }}>จองเลย</Button>
        </Box>
    </HeaderWarper>
  )
}

export default Header