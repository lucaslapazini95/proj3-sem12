import HomeHero from "../components/homeHero/HomeHero";
import Categories from "../components/browseCategories/Categories";
import Products from "../components/productCard/Products";
import InspirationCarousel from "../components/inspiration/InspirationCarousel";
import Setup from "../components/setup/Setup";
import React, { useEffect, useState } from "react";

interface IProductImage {
  mainImage: string;
}

interface IProducts {
  id: number;
  title: string;
  images: IProductImage;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HomeHero />
      <Categories />
      <Products isPreview />
      <InspirationCarousel products={products} />
      <Setup />
    </div>
  );
};

export default Home;
