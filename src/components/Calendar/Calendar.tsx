import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./main.scss"; // webpack must be configured to do this
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers";

export const Calendar: React.FC = () => {
  const events = useSelector((state: IRootState) => state.visits);
  const handleDateClick = e => {
    console.log(e);
  };
  return (
    <div className="calendar-container">
      <FullCalendar
        defaultView="dayGridMonth"
        dateClick={handleDateClick}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={Object.values(events)}
      />
    </div>
  );
};
