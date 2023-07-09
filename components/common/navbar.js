import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'



const MainCont = styled.div`
position: relative;
z-index: 5;
.navbar{
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
height: 75px;
flex-shrink: 0;
background: rgba(255, 255, 255, 0.10);
backdrop-filter: blur(25px);
}



.btn1{
  display: flex;
  align-items: center;
  justify-content: center;
width: 112px;
height: 42px;
background: url("/images/navbtn.svg");
background-size:112px 42px;
cursor: pointer;
}


.btn2{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7.18px;
  width: 112px;
height: 42px;
background: url("/images/navbtn.svg");
background-size:112px 42px;
cursor: pointer;
}
.buttons{
  margin-left: 383px;
  color: #FFF;
text-align: center;
font-family: 'Montserrat', sans-serif;
font-family: 'Righteous', cursive;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 16px;
  height: 100%;
  display: flex;
  align-items: center;
}
.btn1:hover,.btn2:hover{
  transform: scale(1.1);
  transition:0.3s;
}
.links{
  margin-left: 505px;
  display: flex;
  align-items: center;
  gap:52px;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
font-family: 'Righteous', cursive;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
}
.link:hover{
  transform: scale(1.1);
  transition: 0.2s;
}
.link{
  cursor: pointer;
}
`




function Navbar() {

  const router = useRouter();

  return (
    <MainCont>
    <div className='navbar'>
      <div className='logo'></div>
      <div className='links'>
      <div className='link' onClick={()=>{router.push('/marks')}}>View Grades</div>
      <div className='link' onClick={()=>{router.push('/prediction')}} >analyse Grades</div>
      <div className='link'>Predict Grades</div>
      </div>
      <div className='buttons'>
        <div className='btn1'>Log in</div>
        <div className='btn2'>Sign Up</div>
      </div>
    </div>
    </MainCont>
  )
}

export default Navbar
