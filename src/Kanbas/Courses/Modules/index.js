import ModuleList from "./ModuleList";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Modules() {
  return (
    <div id="wd-modules-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">CS5610.11744.202310</li>
          <li className="breadcrumb-item" aria-current="page"> Home</li>
        </ol>
      </nav>
      <div id="home-button" className="row justify-content-end">
        <button className="btn btn-sm btn-secondary col-md-2 md-2">Collapse All</button>
        <button className="btn btn-sm btn-secondary col-md-3 md-2">View Progress</button>
        <select className="btn btn-sm col-md-3 btn-secondary md-2 dropdown-toggle">
          <option value="PUBLISH-ALL" className="dropdown-item">Publish All</option>
          <option value="PUBLISH-1" className="dropdown-item">Publish 1</option>
          <option value="PUBLISH-2" className="dropdown-item">Publish 2</option>
        </select>
        <button className="btn btn-sm btn-danger col-md-2 md-2">Module</button>
      </div>
      <hr></hr>
      <h4>Modules</h4>
      <ModuleList />
    </div>
  );
}
export default Modules;