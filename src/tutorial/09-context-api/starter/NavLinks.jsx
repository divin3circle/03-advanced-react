import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li href="#" className="nav-link">
          Home
        </li>
        <li href="#" className="nav-link">
          About
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
export default NavLinks;
