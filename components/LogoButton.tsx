import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import logo from "public/img/islandLogo.png";

const images = [
  {
    url: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/294279993_492068979391607_5939258456021438813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rd4brfr0-uoAX-r2OuN&_nc_ht=scontent-ord5-1.xx&oh=00_AT83pK1ixWx3rf_F3WyKqyAnYNmNOm1HKatIU6eKGEP5lw&oe=6302D277',
  
    width: '100%',
    
  },

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 60,
  [theme.breakpoints.down('md')]: {
    width: '100% !important', // Overrides inline-style
    height: 60,
  },
  '&:hover ': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 10,
    },
    '& .MuiTypography-root': {
      border: '0px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
  
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 0,
  width: 0,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Button     href="/components"
    >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 60, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          

          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${logo})` }}/>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>

            <Typography
              
              
              
            >
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
      
    </Box>
    </Button>
  );
}
