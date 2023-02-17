import { HashLoader } from "react-spinners";
import useGetData from "../../hooks/useGetData";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data, isLoading, error } = useGetData({
    title: "Products",
    endpoint: "/products",
  });
  console.log({ data, isLoading, error });
  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <div className="w-fit mx-auto py-5">
          <HashLoader color="#36d7b7" />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-screen grid place-items-center">
        <div className="text-red-500 text-center">
          &#9888; Error Fetching Data!
        </div>
      </div>
    );
  }
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
