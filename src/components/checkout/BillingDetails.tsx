const BillingDetails = () => {
  return (
    <div className="bg-white shadow-lg p-8 w-full md:w-2/3 rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium">
            Company Name (Optional)
          </label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">ZIP Code</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Country / Region</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium">Street Address</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Town / City</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Province</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium">Add-on Address</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
