import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const MainCont = styled.div`
position: relative;
z-index: 1;
.banner{
    display: flex;
    justify-content: center;
    gap: 95px;
    top:75px ;
    position: absolute;
    background: url("/images/bannerbg.png");
    width: 100vw;
height: 780.547px;
background-size:100vw 780.547px;

flex-shrink: 0;

}

.head-txt{
    margin-top: 115px;
    width: 800px;
    height: 170px;
    font-family: Jura;
font-size: 72px;
font-style: normal;
font-weight: 500;
line-height: normal;
background: -webkit-linear-gradient(#E6B9FF, #9E89FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desc-txt{
    margin-top: 64px;
    color: #FFF;
    font-family: jura;
    width: 670px;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 160%;
}

.hand-img{
    z-index: -1;
    margin-top: -125px;
}

`


function Banner() {
  return (
    <MainCont>
    <div className='banner'>
      <div className='banner-left' >
      <div className='head-txt'>Keep Calm & <br/> Enhance Your Grades.</div>
      
      <div className='desc-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.</div>
      </div>
      <div className='banner-right'>
        <Image src = {"/images/hand.svg"} className='hand-img' alt="Image" width={555} height={878} />
      </div>
    </div>
    </MainCont>
  )
}

export default Banner
