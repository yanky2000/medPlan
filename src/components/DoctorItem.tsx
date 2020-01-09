import React from "react";
import { IDoctor } from "../models";
import { TableRow, TableCell } from "@material-ui/core";

export const DoctorItem: React.FC<{ doctor: IDoctor }> = ({ doctor }) => {
  const { firstName, lastName, specialization, contacts } = doctor;
  return (
    <TableRow key={doctor.lastName}>
      <TableCell component="th" scope="row">
        {`${firstName} ${lastName}`}
      </TableCell>
      <TableCell align="right">{specialization}</TableCell>
      <TableCell align="right">{contacts.phone}</TableCell>
      <TableCell align="right">{contacts.address.street}</TableCell>
    </TableRow>
  );
};
