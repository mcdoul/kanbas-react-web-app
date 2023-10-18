import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div id="wd-modules">
        <ul className="list-group">
      {
       modules
        //  .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h5>{module.name}</h5>
             <p>{module.description}</p>
           </li>
        ))
        }
        </ul>
    </div>
  );
}
export default ModuleList;
