import React from "react";
import { IClinic } from "../models";
import { TableRow, TableCell } from "@material-ui/core";

export const DoctorItem: React.FC<{ clinic: IClinic }> = ({ clinic }) => {
  const { title, address } = clinic;
  return (
    <TableRow key={clinic._id}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{address}</TableCell>
      {/* <TableCell align="right">{phone}</TableCell> */}
      {/* <TableCell align="right">{clinic.title}</TableCell> */}
      {/* <TableCell align="right">{clinic.contacts.address.street}</TableCell> */}
    </TableRow>
  );
};
