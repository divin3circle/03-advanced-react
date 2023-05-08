import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2 style={{ color: "red" }}>Toggle components</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <AnotherComponent />}
    </div>
  );
};

const AnotherComponent = () => {
  useEffect(() => {
    const someFunction = () => {};
    window.addEventListener("scroll", someFunction);
    return () => window.removeEventListener("scroll", someFunction);
  }, []);
  return <h1>Hello world</h1>;
};

export default CleanupFunction;
