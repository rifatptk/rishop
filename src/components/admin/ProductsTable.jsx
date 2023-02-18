import React from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useGetData from "../../hooks/useGetData";

export default function ProductsTable() {
  const { data, isLoading, error } = useGetData({
    title: "Products",
    endpoint: "/products",
  });

  if (isLoading) {
    return (
      <div className="h-full grid place-items-center">
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
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-600 py-5">Products</h1>
        <Link
          to="/admin/products/add"
          className="text-white bg-blue-500 hover:bg-blue-400 rounded px-3 py-1"
        >
          Add product
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["Product name", "Brand", "Category", "Price"].map((el) => (
                <th key={el} scope="col" className="px-6 py-3">
                  {el}
                </th>
              ))}

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.products?.slice(0, 10).map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title}
                </th>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/admin/products/${product.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
