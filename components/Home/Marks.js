import React, { useEffect, useState } from "react";
import { getMarks } from "../../utils/api";
import { useRouter } from "next/router";

const Marks = () => {
  const router = useRouter()
  const [ind, setInd] = useState(-1);
  const [data, setData] = useState();
  useEffect(() => {
    getMarks(setData);
  }, []);
  console.log(data);
  return (
    <div id="marks">
      <button onClick={()=>router.push('/')}
      style={{
        position:"absolute",
        width:"200px",
        paddingTop:"10px",
        paddingBottom:"10px",
        top:"30px",
        left:"100px",
        backgroundColor:"black",
        color:"white",
        fontFamily: 'Montserrat, sans-serif',
fontFamily: 'Righteous, cursive'
      }}>{"<- Back"}</button>
      <p>Marks</p>
      {data?.map((d, i) => (
        <div className="" key={i}>
          <div
            className="burger"
            onClick={() => {
              setInd(i);
            }}
          >
            Semister {i+1}
          </div>
          {i === ind && (
            <table>
              <tr>
                <th>Grade</th>
                <th>Subject Name</th>
                <th>Subject Code</th>
              </tr>
              {d.Gradelist.map((l, i) => (
                <tr key={i}>
                  <td key={i}>{l.grade}</td>
                  <td key={i}>{l.subject_name}</td>
                  <td key={i}>{l.subject_code}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default Marks;
