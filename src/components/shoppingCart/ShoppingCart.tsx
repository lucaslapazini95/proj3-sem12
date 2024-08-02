import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeItemFromCart, updateQuantity } from "../../redux/cartSlice";
import TrashIcon from "../../assets/shoppingCart/trash.svg";
import { useNavigate } from "react-router-dom";

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 text-left">Product</th>
                    <th className="py-4 px-6 text-left">Price</th>
                    <th className="py-4 px-6 text-left">Quantity</th>
                    <th className="py-4 px-6 text-left">Subtotal</th>
                    <th className="py-4 px-6 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="py-4 px-6 flex items-center space-x-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span className="text-gray-700">{item.title}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        R$ {item.salePrice.toFixed(2)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="text-gray-600 hover:text-gray-900 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="text-gray-600 hover:text-gray-900 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        R$ {(item.salePrice * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <img src={TrashIcon} alt="Remove item" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-50 p-6 shadow-md rounded">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between py-2 border-t border-gray-200">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-200">
              <span className="text-gray-900 font-semibold">Total</span>
              <span className="text-yellow-600 font-semibold">
                R$ {totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded"
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
