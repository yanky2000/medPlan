import React from "react";
import { IClinic } from "../../types/models";
import { TableRow, TableCell } from "@material-ui/core";

export const ClinicItem: React.FC<{ clinic: IClinic }> = ({ clinic }) => {
  const { title, address, contacts } = clinic;
  return (
    <TableRow key={clinic._id}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{address.street}</TableCell>
      <TableCell align="right">{contacts.phone}</TableCell>
      <TableCell align="right">{address.city}</TableCell>
    </TableRow>
  );
};
