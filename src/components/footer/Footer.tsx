import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400 p-4">
      <section className="flex flex-wrap justify-between items-start max-w-screen-xl mx-auto my-8 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/4">
          <h2 className="text-xl mb-10 text-left">Furniro.</h2>
          <p className="text-gray-600 text-left max-w-xs">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-medium text-gray-600 text-left mb-12">Links</h3>
          <ul className="flex flex-col gap-4 md:gap-12">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-medium text-gray-600 text-left mb-12">Help</h3>
          <ul className="flex flex-col gap-4 md:gap-12">
            <li>
              <Link to="/shop/cart" className="hover:underline">
                Payment Options
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Returns
              </Link>
            </li>
            <li className="hover:underline">Privacy Policies</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-medium text-gray-600 text-left mb-12">
            Newsletter
          </h3>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-transparent border-b-black text-gray-600 text-sm py-2 outline-none transition-all focus:border-gray-600 focus:rounded-md hover:border-gray-600 hover:rounded-md w-full md:w-auto"
            />
            <button className="text-sm border-none border-b-black mt-3 md:mt-0 md:ml-3 cursor-pointer py-2 px-3 bg-transparent transition-all hover:bg-black hover:text-white hover:rounded-md w-full md:w-auto">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-400 pt-4 mt-4 text-left max-w-screen-xl mx-auto">
        <p>2023 Furniro. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
