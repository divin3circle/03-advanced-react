import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "Default value"}</h2>
      {text && (
        <div>
          <h2>Another Return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent user={user} />}
      <h2 style={{ margin: "1rem" }}>Tenary Operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      {!user ? (
        <div>
          <h4>Hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>Please log in</h4>
          <button className="btn">Log In</button>
        </div>
      )}
    </div>
  );
};

const SomeComponent = (props) => {
  const { name } = props.user;
  return (
    <div>
      <h2>Another return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
