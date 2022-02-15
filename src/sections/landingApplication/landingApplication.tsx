import { Box } from "@mui/material";
import Header from '../../components/LandingHeader'
import Main from '../../components/LandingMain'
import Footer from '../../components/LandingFooter'


export default function Home() {
  return (
    <Box>
      <Header />
      <Main />
      <Footer />
    </Box>
    )
  }
  
  // import { Container } from '@mui/material';
// <Container fixed sx={{padding:'1rem'}} >
//         <LandingApplication />
//     </Container>