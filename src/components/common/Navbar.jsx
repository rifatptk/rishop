import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleCart } from "../../redux/features/cart/cartSlice";
import { logout } from "../../redux/features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.auth);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  to="/"
                  className="text-white text-3xl font-bold flex items-center"
                >
                  <span className="text-blue-400">Ri</span>
                  shop
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={() => dispatch(toggleCart())}
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View cart</span>
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                  {!!cartItems.length && (
                    <div className="absolute top-[-8px] right-[-8px] w-5 h-5 text-sm bg-blue-500 text-white rounded-full">
                      {cartItems.length}
                    </div>
                  )}
                </button>
                {!auth.isAuth && (
                  <Link
                    to="/login"
                    className="bg-white/20 flex gap-2 ml-4 text-white rounded-md py-2 px-3"
                  >
                    <span>Login</span>
                    <UserIcon className="w-6" />
                  </Link>
                )}

                {/* Profile dropdown */}
                {auth.isAuth && (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src={auth.user?.avatar || "images/avatar.png"}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {auth.isAuth && (
                          <div
                            onClick={() => {
                              dispatch(clearCart());
                              dispatch(logout());
                            }}
                            className="hover:bg-gray-200 px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
