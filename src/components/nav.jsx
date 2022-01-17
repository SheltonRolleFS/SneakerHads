import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      {/* This should be a Link when React Router is added */}
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Items</Link>
      </div>
    </nav>
  );
};

export default Nav;
