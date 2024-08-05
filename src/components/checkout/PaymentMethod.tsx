const PaymentMethod = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
      <div className="mb-4">
        <p className="font-medium">Product</p>
        <p>Asgaard sofa x 1</p>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">R$ 250,000.00</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-semibold text-yellow-600">R$ 250,000.00</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Payment Options</label>
        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="h-4 w-4" />
            Direct Bank Transfer
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="h-4 w-4" />
            Cash on Delivery
          </label>
        </div>
      </div>
      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded">
        Place Order
      </button>
    </div>
  );
};

export default PaymentMethod;
