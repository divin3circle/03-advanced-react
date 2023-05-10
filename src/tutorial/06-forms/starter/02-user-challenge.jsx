import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter a name");
    const fakeId = Date.now();
    const newUser = {
      id: fakeId,
      name,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  };
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div>
        <h3>Users</h3>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div
              key={id}
              style={{
                border: "0.5px solid gray",
                borderRadius: "12px",
                margin: "2rem",
              }}
            >
              <h4>{name}</h4>
              <button
                className="btn"
                style={{ backgroundColor: "red", margin: "1.5rem" }}
                onClick={() => {
                  removeUser(id);
                }}
              >
                Remove user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
