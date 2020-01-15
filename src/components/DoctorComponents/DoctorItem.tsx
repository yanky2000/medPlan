import React from "react";
import { IDoctor } from "../../types/models";
import { TableRow, TableCell } from "@material-ui/core";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers";

export const DoctorItem: React.FC<{ doctor: IDoctor }> = ({ doctor }) => {
  const { firstName, lastName, specialization, contacts, clinics } = doctor;
  const clinic = useSelector((state: IRootState) => state.clinics[clinics[0]]);
  return (
    <TableRow key={doctor.lastName}>
      <TableCell component="th" scope="row">
        {`${firstName} ${lastName}`}
      </TableCell>
      <TableCell align="right">{specialization}</TableCell>
      {/* <TableCell align="right">{contacts.phone}</TableCell> */}
      <TableCell align="right">{clinic.title}</TableCell>
      {/* <TableCell align="right">{clinic.contacts.address.street}</TableCell> */}
    </TableRow>
  );
};
