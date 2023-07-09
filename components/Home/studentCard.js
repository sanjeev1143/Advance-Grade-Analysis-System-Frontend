import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const MainCont = styled.div`

.student-card{
   
    background: url("/images/studentcard.svg") no-repeat;
    width: 194.974px;
    padding-left: 9.11px;
height: 69px; 
background-image:194.974px 69px ;
}
.align{
    display: flex;
    height: 80%;
    align-items: center;
}

.prof-details{
margin-left: 7.54px;

}

.prof-name{
    color: #F5FBF2;
font-family: Righteous;
width: 70px;
font-size: 10.051px;
font-style: normal;
font-weight: 600;
line-height: 11.136px;
letter-spacing: 0.503px; 
}


.prof-score{
    margin-top: 2px;
    color: #FFF;
font-family: Righteous;
font-size: 7.538px;
font-style: normal;
font-weight: 500;
line-height: 11.308px;
}
.line{
    margin-left: 20px;
    margin-right: 17px;
    width: 0.942px;
height: 31.41px; 
background: #FFF;
}
.rank{
    color: #F5FBF2;
font-family: Righteous;
font-size: 10.051px;
font-style: normal;
font-weight: 700;
line-height: 11.136px;
letter-spacing: 0.503px; 
}


.rank-txt{
    margin-top: 2px;
    color: #FFF;
font-family: Righteous;
font-size: 7.538px;
font-style: normal;
font-weight: 500;
line-height: 11.308px;
}
.rank-div{
    display: flex;
    flex-direction: column;
    align-items: center;
}


`

function StudentCard({name,score, rank}) {
  return (
    <MainCont>
    <div className='student-card'>
        <div className='align'>
      <div className=''><Image className='' src={"/images/profile.svg"} alt="Image" width={35.667} height={35.667}/></div>
      <div className='prof-details'>
      <div className='prof-name'>{name}</div>
      <div className='prof-score'>{score}</div>

      </div>
      <div className='line'></div>
      <div className='rank-div'>
      <div className='rank'>{rank}</div>
      <div className='rank-txt'>Rank</div>
      </div>

    </div>
    </div>
    </MainCont>
  )
}

export default StudentCard
