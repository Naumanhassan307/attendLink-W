import { useState } from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";

function useDeleteUpdate() {
    
  const store = useSelector((store) => store.TeacherReducer.teachers);
  console.log("Store data come from store is ", store);
  const ctaDownloadHandler=(item)=>{
    console.log("item in download is", item);
    const doc = new jsPDF();
    // doc.addImage(`${item.code}.PNG`, 65, 20, 500, 400)

    doc.addFont("Helvertica", "bold");
    doc.text(80, 30, "Attend Link");

    doc.text(10, 40, "========================================================");

    doc.text(10, 50, "Teacher ID:");
    doc.text(10, 60, "Teacher Name:");
    doc.text(10, 70, "Father Name:");
    doc.text(10, 80, "Department:");

    doc.addFont("normal");
    doc.text(70, 50, item.id);
    doc.text(70, 60, item.name);
    doc.text(70, 70, item.fName);
    doc.text(70, 80, item.depart);

    doc.text(10, 90, "========================================================");

    doc.addImage(item.code, 65, 100, 50, 50)

    doc.save(`${item.id}-${item.name}.pdf`);
  }

  return [store, ctaDownloadHandler];
}
export default useDeleteUpdate;
