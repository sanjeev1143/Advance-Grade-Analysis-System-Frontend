import axios from "axios";

export const postPdfFile = (file, cb) => {
  axios
    .post("http://localhost:8000/upload/single", file, {
      headers: {
        "Content-Type": "pdf",
      },
    })
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getMarks = (cb) => {
  axios
    .get("http://localhost:8000/upload/gradelist", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
