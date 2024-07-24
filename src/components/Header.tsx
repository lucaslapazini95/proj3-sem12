import { Link } from "react-router-dom";
import LogoFurniro from "../assets/furniro-logo.svg";
import AccountIcon from "../assets/header/user.svg";
import CartIcon from "../assets/header/cart.svg";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <section className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <img src={LogoFurniro} alt="LogoFurniro" className="h-12" />
        </Link>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-6 items-center">
          <Link to="/signup">
            <img src={AccountIcon} alt="AccountIcon" className="h-6" />
          </Link>
          <img src={CartIcon} alt="CartIcon" className="h-6" />
        </div>
      </section>
    </header>
  );
};

export default Header;
