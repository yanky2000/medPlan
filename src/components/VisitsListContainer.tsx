import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import { IRootState } from "../reducers";
import { fetchVisits } from "../features/visitsReducer";
import { NewEventForm } from "./newVisitForm/NewVisitForm";
import { VisitItem } from "./VisitItem";
import Typography from "@material-ui/core/Typography";
import { fetchDoctors } from "../features/doctorReducer";
import { fetchClinics } from "../features/clinicsReducer";

export const VisitsListContainer: React.FC = props => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchVisits());
    dispatch(fetchDoctors());
    dispatch(fetchClinics());
  }, []);

  const dispatch = useDispatch();
  const { visits } = useSelector((state: IRootState) => state);
  const upComingVisits = Object.values(visits).map(
    ({ visitId, title, date, clinic }) => {
      return (
        <Link key={visitId} to={`visits/${visitId}`}>
          <VisitItem visitId={visitId} key={visitId} />
        </Link>
      );
    }
  );

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  return (
    <div>
      <Typography component="h1" variant="h5">
        Upcoming examinations
      </Typography>
      <ul>{upComingVisits}</ul>
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? "Close form" : "Add Event"}
      </button>
      {isFormVisible && <NewEventForm />}
      {/* { <NewEventForm hidden={isFormVisible}/>} */}
    </div>
  );
};
