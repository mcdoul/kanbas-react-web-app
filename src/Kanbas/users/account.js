import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
    alert("User Saved!")
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };



  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <label>Password</label>
          <input value={account.password} className="form-control"
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <label>first Name</label>
          <input value={account.firstName} className="form-control"
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <label>Last Name</label>
          <input value={account.lastName} className="form-control"
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <label>Date of Birth</label>
          <input type="date" value={account.dob} className="form-control"
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <label>Email</label>
          <input value={account.email} className="form-control"
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-secondary">
            Save
          </button>
          <Link to="/Kanbas/admin/users" className="btn btn-danger w-100">
            Users
          </Link>
          <button onClick={signout} className="btn btn-secondary">
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;
