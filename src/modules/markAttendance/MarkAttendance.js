
import "./MarkAttendance.css"

import QrReader from "react-qr-reader";
import useMarkAttendance from "./useMarkAttendance"

function MarkAttendance() {
    const [ctaErrorHandler, ctaScannWebcam, setQrRun, qrRun] = useMarkAttendance();
 
  return (
    <>
      
      <h5 style={{ textAlign: "right", marginRight: 15 }}>
        Developed By: Nauman Hassan
      </h5>
      <div className="head-div">Mark Attendance</div>
      <div className="qr-main">
        <div className="qr-main-1">
          <h2>Qr Code Scanner</h2>
          {/* {qrRun && ( */}
            <QrReader
              delay={300}
              style={{ width: 280, height: 240 }}
              onError={ctaErrorHandler}
              onScan={ctaScannWebcam}
            />
          {/* )} */}

          {/* {setQrRun(false)} */}
        </div>
        <div className="qr-main-2"></div>
      </div>
    </>
  );
}
export default MarkAttendance;


