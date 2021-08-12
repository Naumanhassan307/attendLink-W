import Loader from "../../constants/loader/Loader";
import React from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import "./CheckAttendanceStyle.css";

import BlueButton from "../../constants/button/Button";
import UseCheckAttendance from "./useChackAttendance";


import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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


function CheckAttendence(){




  
  const [setTchId, setDate, ctaOneTch, ctaAllTch, loading, oneTch] = UseCheckAttendance();
    const classes = useStyles();

  return (
    <>
      <h5 style={{ textAlign: "right", marginRight: 15 }}>
        Developed By: Nauman Hassan
      </h5>

      {/* <h1>Sorry! Check Attendence is Under Developing...</h1> */}
      <div className="frm">
        <TextField
          style={{ marginBottom: 30, marginRight: 5 }}
          id="basic"
          autoComplete="off"
          label="Teacher ID"
          required
          onChange={(e) => {
            setTchId(e.target.value);
          }}
        />

        <TextField
          style={{ marginBottom: 13, marginRight: 5 }}
          id="basic"
          autoComplete="off"
          // label="Teacher ID"
          type="date"
          required
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <BlueButton txt="Check" cta={ctaOneTch} />
      </div>
      <hr />
      <div className="frm">
        <h1 style={{ marginRight: 27 }}>All Teachers</h1>
        <TextField
          style={{ marginBottom: 13, marginRight: 5 }}
          id="basic"
          autoComplete="off"
          // label="Teacher ID"
          type="date"
          required
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <BlueButton txt="check" cta={ctaAllTch} />
      </div>
      {/* <Loader /> */}
      {loading ? (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>TEACHER ID</StyledTableCell>
                  <StyledTableCell>TEACHER NAME</StyledTableCell>
                  <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Time</StyledTableCell>
                  <StyledTableCell align="left">STATUS</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {oneTch.map((item) => (
                  <StyledTableRow key={"item.name"}>
                    <StyledTableCell align="left">{item.newId}</StyledTableCell>
                    <StyledTableCell component="th" scope="item">
                      {"item.name"}
                    </StyledTableCell>

                   
                    <StyledTableCell align="left">
                      {"item.depart"}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.date}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.time}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
    </>
  );
}
export default CheckAttendence;







// import React from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// import BlueButton from "../../constants/button/Button";

// import Loader from "../../constants/loader/Loader";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "rgba(0, 0, 0, 0.780)",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CheckAttendence() {
  

//   const classes = useStyles();

//   return (
//     <>
//       <h5 style={{ textAlign: "right", marginRight: 15 }}>
//         Developed By: Nauman Hassan
//       </h5>


      // <TableContainer component={Paper}>
      //   <Table className={classes.table} aria-label="customized table">
      //     <TableHead>
      //       <TableRow>
      //         <StyledTableCell>TEACHER ID</StyledTableCell>
      //         <StyledTableCell>TEACHER NAME</StyledTableCell>
      //         {/* <StyledTableCell align="left">FATHER NAME</StyledTableCell> */}
      //         <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
      //         <StyledTableCell align="left">E-mail</StyledTableCell>
      //         {/* <StyledTableCell align="center">QR CODE</StyledTableCell> */}
      //         <StyledTableCell align="center">TODAY</StyledTableCell>
      //         <StyledTableCell align="center">CUSTOM CHECK</StyledTableCell>
      //         <StyledTableCell align="center">STATUS</StyledTableCell>
      //       </TableRow>
      //     </TableHead>

      //     <TableBody>
      //       {/* {store.map((item) => ( */}
      //       <StyledTableRow key={"item.name"}>
      //         <StyledTableCell align="left">{"item.id"}</StyledTableCell>
      //         <StyledTableCell component="th" scope="item">
      //           {"item.name"}
      //         </StyledTableCell>

      //         {/* <StyledTableCell align="left">{"item.fName"}</StyledTableCell> */}
      //         <StyledTableCell align="left">{"item.depart"}</StyledTableCell>
      //         <StyledTableCell align="left">
      //           {"item.email.toUpperCase()"}
      //         </StyledTableCell>
      //         {/* <StyledTableCell align="center">
      //               <img src={"item.code"} style={{ height: 70, width: 70 }} />
      //             </StyledTableCell> */}
      //         <StyledTableCell align="center">
      //           <BlueButton
      //             txt="download"
      //             // cta={() => {
      //             //   ctaDownloadHandler(item);
      //             // }}
      //           />
      //         </StyledTableCell>
      //         <StyledTableCell align="right">
      //           <BlueButton
      //             txt="Delete"
      //             // cta={() => {
      //             //   ctaDeleteHandler(item.id, item.tchDocId, item.name);
      //             // }}
      //           />
      //         </StyledTableCell>
      //         {/* <StyledTableCell align="right">
      //           <BlueButton txt="Delete" cta={()=>{ctaDeleteHandler(item.id)}}/>
      //         </StyledTableCell> */}
      //       <StyledTableCell align="left">
      //         {"Present/Absent"}
      //       </StyledTableCell>
      //       </StyledTableRow>
      //       {/* ))} */}
      //     </TableBody>
      //   </Table>
      // </TableContainer>
//     </>
//   );
// }
