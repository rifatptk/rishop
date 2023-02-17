import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useGetData from "../../hooks/useGetData";
import ProductCard from "./ProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

export default function ProductList() {
  const { data, isLoading, error } = useGetData({
    title: "Products",
    endpoint: "/products",
  });
  console.log({ data, isLoading, error });
  if (isLoading) return <HashLoader color="#36d7b7" />;
  if (error) return <p>Unexpected error occured!</p>;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
