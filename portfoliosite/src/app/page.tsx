'use client';
import Banner from '@ec/components/Banner';
import Container from '@mui/material/Container';
import { BANNER_IMAGE_DESKTOP } from '../constants/images';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
     <Banner image={BANNER_IMAGE_DESKTOP} >
        <Container maxWidth="lg">
          <Typography variant="h1" textAlign='center' textTransform='uppercase' marginY='-12%' >
          "Programming is my passion, Not my job."
          </Typography>
        </Container>
      </Banner>
    </>
  );
}
