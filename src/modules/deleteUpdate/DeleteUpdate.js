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
import useDeleteUpdate from "./useDeleteUpdate";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchTeacherAct } from "../../store/actions/TeacherAction";
import Loader from "../../constants/loader/Loader";
import { FetchUserAct } from "../../store/actions/FetchUserAct";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DeleteUpdate() {
  const [store, ctaDownloadHandler, ctaDeleteHandler, loading, setLoading] =
    useDeleteUpdate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUserAct());
  }, []);

  const classes = useStyles();

  return (
    <>
      <h5 style={{ textAlign: "right", marginRight: 15 }}>
        Developed By: Nauman Hassan
      </h5>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Restaurent ID</StyledTableCell> */}
              <StyledTableCell>User NAME</StyledTableCell>
              <StyledTableCell align="left">User Country</StyledTableCell>
              <StyledTableCell align="left">User City</StyledTableCell>
              <StyledTableCell align="left">User E-mail</StyledTableCell>
              {/* <StyledTableCell align="center">DELETE RECORD</StyledTableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {store.map((item) => (
              <StyledTableRow key={item.cUsername}>
                {/* <StyledTableCell align="left">{item.id}</StyledTableCell> */}
                <StyledTableCell component="th" scope="item">
                  {item.cUsername.toUpperCase()}
                </StyledTableCell>

                <StyledTableCell align="left">
                  {item.cUsercountry.toUpperCase()}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {item.cUsercity.toUpperCase()}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {item.cUseremail.toUpperCase()}
                </StyledTableCell>
                {/* <StyledTableCell align="center">
                    <img src={item.code} style={{ height: 70, width: 70 }} />
                  </StyledTableCell> */}
                {/* <StyledTableCell align="center">
                    <BlueButton
                      txt="download"
                      cta={() => {
                        ctaDownloadHandler(item);
                      }}
                    />
                  </StyledTableCell> */}
                {/* <StyledTableCell align="right">
                  <BlueButton
                    txt="Delete"
                    cta={() => {
                      ctaDeleteHandler(item.id, item.tchDocId, item.name);
                    }}
                  />
                </StyledTableCell> */}
                {/* <StyledTableCell align="right">
                <BlueButton txt="Delete" cta={()=>{ctaDeleteHandler(item.id)}}/>
              </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* )} */}
    </>
  );
}
