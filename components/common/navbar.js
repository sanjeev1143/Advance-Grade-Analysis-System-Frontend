import React from 'react'
import styled from 'styled-components'

const MainCont = styled.div`
.navbar{
    width: 100%;
height: 87px;
box-shadow: 0px -2px 10px 0px rgba(190, 245, 110, 0.48); 
flex-shrink: 0; 
background: #030303; 
}
.Heading{
    color: #BEF56E;
text-align: center;
font-family: 'Montserrat', sans-serif;
font-family: 'Righteous', cursive;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 3.6px; 
}

`



function Navbar() {
  return (
    <MainCont>
    <div className='navbar'>
    <div className='Heading'>
        Grade Analysis System
    </div>
    </div>
    </MainCont>
  )
}

export default Navbar
