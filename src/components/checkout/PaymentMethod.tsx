const PaymentMethod = () => {
  return (
    <div className="bg-white shadow-lg p-8 w-full md:w-1/3 rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
      <div className="mb-6">
        <p className="font-medium">Product</p>
        <p>Asgaard sofa x 1</p>
      </div>
      <div className="mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">R$ 250,000.00</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-semibold text-yellow-600">R$ 250,000.00</span>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium">Payment Options</label>
        <div className="flex flex-col gap-3 mt-3">
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
      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded">
        Place Order
      </button>
    </div>
  );
};

export default PaymentMethod;
