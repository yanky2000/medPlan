import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../reducers";
import Button from "@material-ui/core/Button";
import { uploadFileToServer } from "../features/visitsReducer";

export const VisitDetails = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { _id } = useParams();
  const { title, date, doctor } = useSelector(
    (state: IRootState) => state.visits[_id]
  );
  const dispatch = useDispatch();
  const handleUpload = event => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };
  const uploadFile = () => {
    console.log(selectedFile);
    const data = new FormData();
    data.append("file", selectedFile);
    dispatch(uploadFileToServer(data));
    // setSelectedFile(e.target.files[0]);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      {/* <p>Location: {visit.location}</p> */}
      <p>Doctor: {doctor.firstName}</p>
      {/* <p>Reqs: {visit.requirements}</p> */}
      <input type="file" name="results" id="" onChange={handleUpload} />
      <Button variant="outlined" color="default" onClick={uploadFile}>
        Upload
      </Button>
    </div>
  );
};
