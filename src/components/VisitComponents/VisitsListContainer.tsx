import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import { IRootState } from "../../store/reducers";
import { fetchVisits } from "../../store/reducers/visitsReducer";
import { NewEventForm } from "../newVisitForm/NewVisitForm";
import { VisitItem } from "./VisitItem";
import Typography from "@material-ui/core/Typography";
import { fetchDoctors } from "../../store/reducers/doctorReducer";
import { fetchClinics } from "../../store/reducers/clinicsReducer";

export const VisitsListContainer: React.FC = props => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchVisits());
    dispatch(fetchDoctors());
    dispatch(fetchClinics());
  }, []);

  const dispatch = useDispatch();
  const { visits } = useSelector((state: IRootState) => state);
  const upComingVisits = Object.values(visits).map(visit => {
    const { _id } = visit;
    return (
      <Link key={_id} to={`visits/${_id}`}>
        <VisitItem visit={visit} key={_id} />
      </Link>
    );
  });

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
