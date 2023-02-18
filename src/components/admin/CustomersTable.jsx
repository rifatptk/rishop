import React from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useGetData from "../../hooks/useGetData";

export default function CustomersTable() {
  const { data, isLoading, error } = useGetData({
    title: "Users",
    endpoint: "/users",
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
        <h1 className="text-2xl font-bold text-gray-600 py-5">Customers</h1>
        <Link
          to="/admin/customers/add"
          className="text-white bg-blue-500 hover:bg-blue-400 rounded px-3 py-1"
        >
          Add customer
        </Link>
      </div>{" "}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["Customer", "Email", "Phone", "Gender"].map((el) => (
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
            {data.users?.slice(0, 10).map((customer) => (
              <tr
                key={customer.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 flex gap-2 items-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover border"
                    src={customer.image}
                    alt={customer.firstname}
                  />
                  <span>{`${customer.firstName} ${customer.lastName}`}</span>
                </th>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4">{customer.gender}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/admin/customers/${customer.id}`}
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
