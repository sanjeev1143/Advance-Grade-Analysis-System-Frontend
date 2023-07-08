import React, { useState } from "react";
import { postPdfFile } from "../../utils/api";

const HomeContent = () => {
  const [marks, setMarks] = useState(undefined);
  let i = 0;
  const onSetMarks = (mark) => {
    setMarks({ ...marks, ...mark });
    i = i + 1;
    window.open("/marks", "_self");
  };
  const handleUpload = (file) => {
    postPdfFile(file, onSetMarks);
  };
  console.log(marks);
  return (
    <div className="home" id="home">
      <input
        type="file"
        name=""
        id="file"
        onChange={(e) => handleUpload(e.target.files[0])}
      />
      <label htmlFor="file">upload file</label>
    </div>
  );
};

export default HomeContent;
