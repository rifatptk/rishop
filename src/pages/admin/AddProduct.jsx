import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function AddProduct() {
  const [image, setimage] = useState(null);

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    return navigate("/admin/products");
  }
  return (
    <AdminLayout>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-gray-700 w-fit mx-auto text-2xl font-bold flex items-center">
              Add Product
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="thumbnail" className="cursor-pointer">
                  {image ? (
                    <img
                      className="w-40 rounded-lg"
                      src={URL.createObjectURL(image)}
                      alt="Thumbnail"
                    />
                  ) : (
                    <PhotoIcon className="w-40 text-gray-500" />
                  )}
                </label>
                <input
                  onChange={(e) => setimage(e.target.files[0])}
                  id="thumbnail"
                  className="hidden"
                  type="file"
                />
              </div>
              <div>
                <label htmlFor="Title">Title</label>
                <input
                  id="Title"
                  name="Title"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Title"
                />
              </div>
              <div>
                <label htmlFor="Category">Category</label>
                <select
                  id="Category"
                  name="Category"
                  type="Category"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="">Phone</option>
                  <option value="">Laptop</option>
                  <option value="">Desktop</option>
                </select>
              </div>
              <div>
                <label htmlFor="Brand">Brand</label>
                <select
                  id="Brand"
                  name="Brand"
                  type="Brand"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="" hidden>
                    Select Brand
                  </option>
                  <option value="">Apple</option>
                  <option value="">Dell</option>
                  <option value="">Lenovo</option>
                </select>
              </div>
              <div>
                <label htmlFor="Price">Regular Price</label>
                <input
                  id="Price"
                  name="Price"
                  type="number"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Regular Price"
                />
              </div>
              <div>
                <label htmlFor="sPrice">Selling Price</label>
                <input
                  id="sPrice"
                  name="sPrice"
                  type="number"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Selling Price"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
