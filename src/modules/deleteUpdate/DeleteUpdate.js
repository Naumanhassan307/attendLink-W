import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



import BlueButton from "../../constants/button/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgba(0, 0, 0, 0.780)",
    color: theme.palette.common.white,
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
 
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DeleteUpdate() {
  const classes = useStyles();

  return (
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TEACHER ID</StyledTableCell>
            <StyledTableCell>TEACHER NAME</StyledTableCell>
            <StyledTableCell align="left">FATHER NAME</StyledTableCell>
            <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
            <StyledTableCell align="center">UPDATE RECORD</StyledTableCell>
            <StyledTableCell align="center">DPDATE RECORD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>

              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="right"><BlueButton txt="Update"/></StyledTableCell>
              <StyledTableCell align="right"><BlueButton txt="Delete"/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}
