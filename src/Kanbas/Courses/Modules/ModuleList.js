import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule, deleteModule as deleteModuleClient, updateModule as updateModuleClient } from "./client";


function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    deleteModuleClient(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await updateModuleClient(module);
    dispatch(updateModule(module));
  };




  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  return (
    <div id="wd-modules">
        <ul className="list-group">
          <li className="list-group-item">
            <input className="form-control" value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <textarea className="form-control" value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))}
            />
            <button className="btn btn-sm btn-secondary" onClick={handleAddModule}>
              Add
            </button>
            <button className="btn btn-sm btn-secondary" onClick={handleUpdateModule}>
              Update
            </button>

          </li>

          {
          modules
          //  .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h5 >{module.name} </h5>
              <button className="btn btn-sm btn-secondary"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger"
                onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>
              <p>{module.description}</p>
            </li>
          ))
          }
        </ul>
    </div>
  );
}
export default ModuleList;
