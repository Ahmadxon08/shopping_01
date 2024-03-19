import { Link } from "react-router-dom";
import "./Header.scss";
import { ShoppingCart } from "phosphor-react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={42} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
