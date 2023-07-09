import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ParentContainer = styled.div`

.type1{
  filter: blur(2.8961px);
  @media (max-width: 800px){
    transform: scale(0.5);
  
  }
}



.type2{
  transform: rotate(-300deg);
  @media (max-width: 800px){
    transform: scale(0.85);
  
  
  }
}

.type3{
  transform: scale(1.5);

  @media (max-width: 800px){
    transform: scale(0.7);
   
  
  }
}




`;

const MainContainer = styled.div`
width: 84px;
height: 84px;
background-image: url('/images/ball.svg');
background-size: 84px 84px;
position: absolute;
z-index:60;
left: 10%;
top: 10%;
${(props)=>(props.time?`transition-duration: 3s`:`transition-duration: 3s`)};
transition-function-timing: linear;

${(props)=>(props.left?`left: ${props.left}%`:`left: -10%`)};
${(props)=>(props.top?`top: ${props.top}%`:`top: -10%`)};





`;


const configurations = [[{
    left: 5,
    top: 5,
},
{
    left: 95,
    top: 20
}

],]

export default function RoundBall({type,time}) {

  const [position,setPosition] = useState({
    left: 5,
    top: 5
  });
  const changePosition = ()=>{
    let leftRandomPos = Math.floor(Math.random()*100);
    if(leftRandomPos>20 && leftRandomPos <50){
      leftRandomPos = leftRandomPos -20;
    }
    if(leftRandomPos>50 && leftRandomPos<80){
      leftRandomPos = leftRandomPos + 20;
    }
    let topRandomPos = Math.floor(Math.random()*100);
    if(topRandomPos>20 && topRandomPos <50){
      topRandomPos = topRandomPos -20;
    }
    if(topRandomPos>50 && topRandomPos<80){
      topRandomPos = topRandomPos + 20;
    }
    setPosition({
        left: leftRandomPos,
        top: topRandomPos
    })
  }

  const [ref, inView] = useInView();

  useEffect(() => {
    let timer;
    if (inView) {
       timer = setInterval(changePosition,3000);
       changePosition();
    }
    else{
      clearInterval(timer);
    }

    return ()=>{
      clearInterval(timer);
    }

  
   
  }, [ inView]);

  // useEffect(()=>{
  //   const timer = setInterval(changePosition,time);
  //   changePosition();
  //   return ()=>{
  //     clearInterval(timer);
  //   }
  // },[time])

  return (
    <ParentContainer >
    <MainContainer ref={ref} className={type?type==1?'type1':type==2?"type2":type==3?'type3':'':''} left={position.left} top={position.top} >
        
    </MainContainer>
    </ParentContainer>
  )
}