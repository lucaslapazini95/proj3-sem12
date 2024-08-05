const BillingDetails = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">
            Company Name (Optional)
          </label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">ZIP Code</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Country / Region</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Street Address</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Town / City</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Province</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Add-on Address</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
