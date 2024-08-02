import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeItemFromCart, updateQuantity } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/shoppingCartSidebar/close.svg";
import BagClose from "../../assets/shoppingCartSidebar/bag-close.svg";

const ShoppingCartSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleClose = () => onClose();

  const handleNavigateToCart = () => {
    navigate("/cart");
    onClose();
  };

  const handleNavigateToCheckout = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white shadow-lg w-80 max-w-full z-50 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <img src={BagClose} alt="Close Cart" />
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between space-x-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      className="text-gray-600 hover:text-gray-900 focus:outline-none bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="text-gray-600 hover:text-gray-900 focus:outline-none bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-yellow-600 font-semibold mt-2">
                    R$ {item.salePrice.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <img src={CloseIcon} alt="Remove item" />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span className="text-yellow-600 font-semibold">
              R$ {totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={handleNavigateToCart}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded"
            >
              Cart
            </button>
            <button
              onClick={handleNavigateToCheckout}
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded"
            >
              Checkout
            </button>
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded">
              Comparison
            </button>
          </div>
        </div>
        <div className="pb-4"></div>
      </div>
    </>
  );
};

export default ShoppingCartSidebar;
