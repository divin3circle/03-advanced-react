import { useState } from "react";

const ToggleChallenge = () => {
  const [user, setUser] = useState(null);

  /*   const toggle = () => {
    toggleAlert ? setToggleAlert(false) : setToggleAlert(true);
  }; */

  const login = () => {
    //connect to db or api
    setUser({ name: "Sylus Abel" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <h5>Congratulations you are logged in</h5>
          <button className="btn" onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello alert</div>;
};

export default ToggleChallenge;
