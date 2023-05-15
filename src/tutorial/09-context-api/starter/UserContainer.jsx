import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout, login } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <div>
          <h5>Hello there, {user.name}. You are logged in</h5>
          <button className="btn" onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h5>You are not logged in</h5>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default UserContainer;
