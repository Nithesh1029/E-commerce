import NavBar from "./NavBar";
import Banner from "./Banner";

import {styled,Box} from '@mui/material';

const Container= styled(Box) `
  padding:10px;
  background: #f8f7f7;
`;

const Home = () => {
  return (
    <>

      <NavBar />
      <Container>

      <Banner />
      </Container>

    </>
  );
};

export default Home;
