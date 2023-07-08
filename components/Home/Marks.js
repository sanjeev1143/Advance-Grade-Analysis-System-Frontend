import React, { useEffect, useState } from "react";
import { getMarks } from "../../utils/api";

const Marks = () => {
  const [ind, setInd] = useState(-1);
  const [data, setData] = useState();
  useEffect(() => {
    getMarks(setData);
  }, []);
  console.log(data);
  return (
    <div id="marks">
      <p>Marks</p>
      {data?.map((d, i) => (
        <div className="" key={i}>
          <div
            className="burger"
            onClick={() => {
              setInd(i);
            }}
          >
            Semister {i}
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
