import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";

interface Product {
  id: number;
  title: string;
  category: string;
  images: {
    mainImage: string;
  };
}

interface CategoryData {
  id: number;
  title: string;
  images: {
    mainImage: string;
  };
}

const Categories = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3000/products")
      .then((response) => {
        const products = response.data;

        const uniqueCategories = Array.from(
          new Set(products.map((product) => product.category))
        )
          .map((category) => {
            const exampleProduct = products.find(
              (product) => product.category === category
            );

            return {
              id: Math.random(),
              title: category,
              images: {
                mainImage: exampleProduct
                  ? exampleProduct.images.mainImage
                  : "",
              },
            };
          })
          .slice(0, 3);

        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Erro ao buscar categorias:", error));
  }, []);

  return (
    <section className="my-14 mx-auto max-w-6xl px-4">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Browse The Range
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <Category
            key={category.id}
            src={category.images.mainImage}
            alt={category.title}
            title={category.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default Categories;
