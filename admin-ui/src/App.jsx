import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";

const MEMBERS_END_POINT =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() {
  const [textInput, setTextInput] = useState("");
  const [members, setMembers] = useState([]);

  const onChangeTextInput = useCallback((e) => setTextInput(e.target.text), []);

  const fetchUsers = async () => {
    const response = await fetch(MEMBERS_END_POINT);
    const members = await response.json();
    setMembers(members);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderMember = ({ id, name, email, role }) => {
    return (
      <tr key={`${name}-${email}`}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
      </tr>
    );
  };

  return (
    <div className="admin-ui-container">
      <Searchbar
        {...{
          value: textInput,
          onChangeTextInput,
        }}
      />
      <table className="members-table-container">
        <thead>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>{members.map(renderMember)}</tbody>
      </table>
    </div>
  );
}

export default App;
