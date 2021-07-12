import { useState } from "react";

function useMarkAttendance(){

    const [qrRun, setQrRun] = useState(true)
    const ctaErrorHandler=(error)=>{
        console.log("Error in scanning", error);
    }
    const ctaScannWebcam = (result) => {
        console.log("Result is ", result);
    };

    return [ctaErrorHandler, ctaScannWebcam, setQrRun, qrRun];
}
export default useMarkAttendance;