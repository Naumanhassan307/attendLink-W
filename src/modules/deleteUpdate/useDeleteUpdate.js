import { useState } from "react";
import { useSelector } from "react-redux";

function useDeleteUpdate() {
    
  const store = useSelector((store) => store.TeacherReducer.teachers);
  console.log("Store data come from store is ", store);

  return [store];
}
export default useDeleteUpdate;
