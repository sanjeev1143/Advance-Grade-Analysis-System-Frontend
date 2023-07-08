import React, { useEffect, useState } from "react";
import Input from "./Input";
import styled from "styled-components";


const MainCont = styled.div`
.tb{
  width: 100%;
  font-family: 'Montserrat', sans-serif;
font-family: 'Righteous', cursive;
}
.tb th{
  background-color: #BEF56E;
  text-align: center;
  padding: 10px;
}
.tb td{
  background-color: lavenderblush;
  text-align: center;
  padding: 10px;
}
.hover:hover{
  transform: scale(1.1);

}
.sub-no{
  margin-right: 100px;
  font-size: 15px;
}

.frc{
  display: flex;
  align-items: center;
 
}

.row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Heading{
   padding-bottom: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;
font-family: 'Righteous', cursive;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 3.6px; 
}
.col{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.red{
  color: red;

}

.green{
  color: green;
}

.tb{
  
}


`



const Form = () => {

  const [required,setRequired] = useState(0);
  const [obj,setObj] = useState({
    subject:"",
    quiz1:"",
    quiz2:"",
    midsem:"",
    suprisetest:"",
    attendence:""
  })
  const [subjectArray,setSubjectArray]=useState([]);
   const [result,setResult] =useState([]);
  const [state,setState]=useState(-1)


  const onChange=(type,value)=>{
    setObj({...obj,[type]:value})
  }

  const calc =()=>{
    
    let res = 0;

    res = Number(obj.quiz1)/20 +Number(obj.quiz2)/20 +Number(obj.midsem)*0.3 +Number(obj.suprisetest)/10 +Number(obj.attendence)/20;
    res = Math.floor(res)
    return res;



  }
  const updateObj = ()=>{
    subjectArray.push(obj)
    setResult([...result,{subject:obj.subject,total:calc()}])

    console.log(result);

    setObj({
      subject:"",
      quiz1:"",
      quiz2:"",
      midsem:"",
      suprisetest:"",
      attendence:""
    })
    
    setState((state+1))
  }

 
const handelChange = (type,value)=>{

setRequired(value)

}

  return (
    <MainCont>
    <div className="form">
      {state===-1?<div className="col">
        <Input label="Desired Average Mark" value = {required} type = {"desired"} onChange={handelChange}/>
        <button className="form-btn hover" onClick={()=>setState(state+1)}>Next</button>
      </div>:state<6?<div >
      <div className="form-title frc"><div className="sub-no">{state}/6</div> Enter Marks</div>
      <Input label="Subject Name" value = {obj.subject} type = {"subject"} onChange={onChange}/>
      <Input label="Midsem Marks" value = {obj.midsem}  type = {"midsem"} onChange={onChange}/>
      <Input label="Quiz-1 Marks" value = {obj.quiz1} type = {"quiz1"} onChange={onChange}/>
      <Input label="Quiz-2 Marks" value = {obj.quiz2} type = {"quiz2"} onChange={onChange}/>
      <Input label="Suprise Marks" value = {obj.suprisetest} type = {"suprisetest"} onChange={onChange}/>
      <Input label="Attendance Percentage" value = {obj.attendence}  type = {"attendence"} onChange={onChange}/>
      <div className="form-btn-container">
        <button className="form-btn hover" onClick={updateObj}>Next</button>
      </div>
      </div>:<div>
      <div className="Heading">Your Grades</div>
      <table className="tb">
          <tr>
          <th>subject</th>
          <th>total</th>
          <th>required</th>
          <th>isPosible</th>
          </tr>
          {result?.map(res=>(
             <tr key={res.subject}>
             <td>{res.subject}</td>
             <td>{res.total}</td>
             <td>{(required-res.total)*2}</td>
             <td className={((required-res.total)*2) > 100?"red":"green"}>{((required-res.total)*2) > 100 ? "No":"Yes" }</td>
             </tr>
          ))}
        </table>

        </div>}
    </div>
    </MainCont>
  );
};

export default Form;



