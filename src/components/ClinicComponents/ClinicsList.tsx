import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IRootState } from "../../store/reducers";
import { useSelector } from "react-redux";
import { ClinicItem } from "./ClinicItem";
import { NewClinicForm } from "./NewClinic";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export const ClinicsList: React.FC = () => {
  const classes = useStyles({
    table: {
      minWidth: 650
    }
  }); // eslint-disable-line
  const clinics = Object.values(
    useSelector((state: IRootState) => state.clinics)
  );
  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Clinics</TableCell>
              <TableCell align="right">Street</TableCell>
              <TableCell align="right">Tel</TableCell>
              <TableCell align="right">City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clinics.map(clinic => (
              <ClinicItem key={clinic._id} clinic={clinic} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <NewClinicForm />
    </>
  );
};
