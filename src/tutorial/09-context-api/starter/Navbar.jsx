import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "peter" });
  const logout = () => setUser(null);
  const login = () => setUser({ name: "peter" });
  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <div className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
