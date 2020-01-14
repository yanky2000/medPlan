import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IRootState } from "../reducers";
import { useSelector } from "react-redux";
import { DoctorItem } from "./DoctorItem";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export const DoctorsList: React.FC = () => {
  // TODO: Deal with styles ts error
  const classes = useStyles({
    table: {
      minWidth: 650
    }
  }); // eslint-disable-line
  const doctors = Object.values(
    useSelector((state: IRootState) => state.doctors)
  );
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Doctors</TableCell>
            <TableCell align="right">Specialization</TableCell>
            <TableCell align="right">Tel</TableCell>
            <TableCell align="right">Clinic</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map(doctor => (
            <DoctorItem key={doctor._id} doctor={doctor} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
