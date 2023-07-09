import styled from 'styled-components'
import '../styles/globals.css'
import Navbar from '../components/common/navbar';


const MainCont = styled.div`


`


function MyApp({ Component, pageProps }) {



  return (
  <MainCont>
    <Navbar/>
    <Component {...pageProps} />
  </MainCont>
  
  );
}

export default MyApp
