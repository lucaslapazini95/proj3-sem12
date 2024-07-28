const RelatedProducts = () => {
  return (
    <section className="border-t border-gray-300 py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Related Products
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-60 bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product Title"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              Product Title
            </h3>
            <p className="text-gray-600 mt-1 truncate">
              Short product description
            </p>
            <p className="text-xl font-bold text-gray-900 mt-2">$99.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
