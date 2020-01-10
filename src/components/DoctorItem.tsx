import React from "react";
import { IDoctor } from "../models";
import { TableRow, TableCell } from "@material-ui/core";

export const DoctorItem: React.FC<{ doctor: IDoctor }> = ({ doctor }) => {
  const { firstName, lastName, specialization } = doctor;
  return (
    <TableRow key={doctor.lastName}>
      <TableCell component="th" scope="row">
        {`${firstName} ${lastName}`}
      </TableCell>
      <TableCell align="right">{specialization}</TableCell>
      {/* <TableCell align="right">{phone}</TableCell> */}
      {/* <TableCell align="right">{clinic.title}</TableCell> */}
      {/* <TableCell align="right">{clinic.contacts.address.street}</TableCell> */}
    </TableRow>
  );
};
