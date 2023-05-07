import { useState } from "react";

const ShortCircuitOverview = () => {
  const [firstState, setFirstState] = useState("");
  const [secondState, setSecondState] = useState("name");

  return (
    <div>
      <h4>Falsy OR: {firstState || "Hello World"}</h4>
      <h4>Falsy AND: {firstState && "Hello World"}</h4>
      <h4>Truthy OR: {secondState || "Hello World"}</h4>
      <h4>Truthy AND: {secondState && "Hello World"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
