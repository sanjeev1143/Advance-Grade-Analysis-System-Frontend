import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import StudentCard from './studentCard'


const MainCont = styled.div`
.map{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 200px;
}
.heading-txt{
    color: #FFF;
font-family: jura;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
}



.map-bg{
   margin-top:74px;


filter: drop-shadow(16px 16px 20px blue);

filter: hue-rotate(70deg);


/* filter: saturate(30%);
filter: sepia(60%); */
}



.btn{
    margin-top: 52px;
    transform: scale(1.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 179px;
height: 42px; 
background: url("/images/navbtn.svg");
background-size:179px 42px;
color: #FFFAF9;
text-align: center;
font-family: 'Righteous', cursive;
font-size: 9px;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor: pointer;
}

.btn:hover{
    transform: scale(1.4);
    transition: 0.3s;
}

.items{
    position: relative;
    z-index: 30;
    display: grid;
    grid-template-columns: 194.974px 194.974px 194.974px;
    grid-column-gap: 200px;
    justify-content: center;
    grid-row-gap: 200px;
    margin-top: -900px;


}

.item:hover{
transform: scale(1.1);
transition: 0.2s;
}


.it1{
margin-top: 38px;
margin-left: 40px;
}


.it2{
    margin-top: 183px;
margin-left: 44px;
}

.it3{
    margin-top: 40px;
margin-left: 54px;
}

.it4{
    margin-top: 34px;
margin-left: 205px;
}

.it5{
    margin-top: -47px;
margin-left: 110px;
}

.it6{
    margin-top: -65px;
margin-left: 49px;
}


`

function Map() {
  return (
    <MainCont>
    <div className='map'>
      <div className='heading-txt'>Top Students</div>
      <div className=''><Image src={"/images/map.svg"} alt="Image" height={583} width={1243} className='map-bg'/></div>
      <div className='btn'>View All Students</div>
    </div>
    <div className='items'>
        <div className='item it1'>
        <StudentCard rank={"1"} score={"997"} name={"Pabitra"}/>
        </div>
        <div className='item it2'>
        <StudentCard rank={"2"} score={"950"} name={"Sanjeev"}/>
        </div>
        <div className='item it3'>
        <StudentCard rank={"3"} score={"777"} name={"Shiva"}/>
        </div>
        <div className='item it4'>
        <StudentCard rank={"4"} score={"639"} name={"Sweety"}/>
        </div>
        <div className='item it5'>
        <StudentCard rank={"5"} score={"553"} name={"Shreya"}/>
        </div>
        <div className='item it6'>
        <StudentCard rank={"6"} score={"473"} name={"Hari"}/>
        </div>
    </div>
    </MainCont>
  )
}

export default Map
