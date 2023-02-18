import { UserCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const [image, setimage] = useState(null);

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    return navigate("/admin/customers");
  }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-gray-700 w-fit mx-auto text-2xl font-bold flex items-center">
            Add Customer
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="thumbnail" className="cursor-pointer">
                {image ? (
                  <img
                    className="w-40 h-40 rounded-full object-cover"
                    src={URL.createObjectURL(image)}
                    alt="Thumbnail"
                  />
                ) : (
                  <UserCircleIcon className="w-40 text-gray-500" />
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
              <label htmlFor="Full name">Full name</label>
              <input
                id="Full name"
                name="Full name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="phone">phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="phone"
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                id="email"
                name="email"
                type="text"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="email"
              />
            </div>
            <div>
              <label htmlFor="Gender">Gender</label>
              <select
                id="Gender"
                name="Gender"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="" hidden>
                  Select Gender
                </option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="DOB"> DOB</label>
              <input
                id="DOB"
                name="DOB"
                type="date"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Date of birth"
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
  );
}
