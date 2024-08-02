import { useState } from "react";
import { Link } from "react-router-dom";
import LogoFurniro from "../../assets/furniro-logo.svg";
import AccountIcon from "../../assets/header/user.svg";
import CartIcon from "../../assets/header/cart.svg";
import MenuIcon from "../../assets/header/menu.svg";
import CloseIcon from "../../assets/header/close.svg";
import ShoppingCartSidebar from "../shoppingCartSidebar/ShoppingCartSidebar";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-white border-b border-gray-300">
      <section className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-2">
        <Link to="/" className="flex items-center">
          <img src={LogoFurniro} alt="LogoFurniro" className="h-10 lg:h-12" />
        </Link>
        <nav className="hidden lg:flex space-x-6">
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
        <div className="hidden lg:flex space-x-6 items-center">
          <Link to="/signup">
            <img src={AccountIcon} alt="AccountIcon" className="h-6" />
          </Link>
          <button onClick={toggleCart}>
            <img src={CartIcon} alt="CartIcon" className="h-6" />
          </button>
        </div>
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            src={isMenuOpen ? CloseIcon : MenuIcon}
            alt="Menu Icon"
            className="h-6"
          />
        </button>
      </section>
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-300">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                <img src={AccountIcon} alt="AccountIcon" className="h-6" />
                <span>Sign Up</span>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                onClick={toggleCart}
              >
                <img src={CartIcon} alt="CartIcon" className="h-6" />
                <span>Cart</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
      <ShoppingCartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
};

export default Header;
