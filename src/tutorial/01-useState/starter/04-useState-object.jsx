import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: "24",
    hobby: "Movie nights",
  });

  const displayPerson = () => {
    setPerson({ name: "John", age: "40", hobby: "bird watching" });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        Show next
      </button>
    </>
  );
};

export default UseStateObject;
