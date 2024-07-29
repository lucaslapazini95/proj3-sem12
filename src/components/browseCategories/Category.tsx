type CategoryProps = {
  src: string;
  alt: string;
  title: string;
};

const Category = ({ src, alt, title }: CategoryProps) => {
  return (
    <li className="text-center">
      <img
        src={src}
        alt={alt}
        className="w-full mb-8 max-w-[300px] mx-auto object-contain md:mb-6 md:pt-6"
      />
      <h3 className="text-gray-800 text-xl font-semibold mb-4 md:mb-6 md:pb-4 md:border-b md:border-gray-600">
        {title}
      </h3>
    </li>
  );
};

export default Category;
