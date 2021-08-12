import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jsPDF from "jspdf";

import { DelTeacherAct } from "../../store/actions/TeacherAction";

function useDeleteUpdate() {

  const [loading, setLoading] = useState(false)
 

  const store = useSelector((store) => store.TeacherReducer.teachers);
  console.log("Store data come from store is ", store);

  const ctaDownloadHandler = (item) => {
    // console.log("item in download is", item);
    const doc = new jsPDF();
    // doc.addImage(`${item.code}.PNG`, 65, 20, 500, 400)

    doc.addFont("Helvertica", "bold");
    doc.text(80, 30, "Attend Link");

    doc.text(
      10,
      40,
      "========================================================"
    );

    doc.text(10, 50, "Teacher ID:");
    doc.text(10, 60, "Teacher Name:");
    doc.text(10, 70, "Teacher E-mail:");

    doc.text(10, 80, "Father Name:");
    doc.text(10, 90, "Department:");

    doc.addFont("normal");
    doc.text(70, 50, item.id);
    doc.text(70, 60, item.name);
    doc.text(70, 70, item.email.toUpperCase());
    doc.text(70, 80, item.fName);
    doc.text(70, 90, item.depart);

    doc.text(
      10,
      100,
      "========================================================"
    );

    doc.addImage(item.code, 65, 100, 50, 50);

    doc.save(`${item.id}-${item.name}.pdf`);
  };

  const dispatch = useDispatch();

  const ctaDeleteHandler = ( itemId, tchDocId , tchName) => {
    console.log("delete item is ", itemId);
    console.log("delete item is ", tchDocId);

    dispatch(DelTeacherAct(itemId, tchDocId, tchName));
  };

  return [store, ctaDownloadHandler, ctaDeleteHandler, loading, setLoading, ];
}
export default useDeleteUpdate;
