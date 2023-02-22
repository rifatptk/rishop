import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleCart } from "../../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { addItemsToCheckout } from "../../redux/features/checkout/checkoutSlice";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  // const [open, setOpen] = useState(true);
  const isOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, crr) => {
    return acc + crr.price * crr.quantity;
  }, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function doCheckout() {
    dispatch(addItemsToCheckout(cartItems));
    dispatch(toggleCart());
    navigate("/checkout");
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(toggleCart())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          {!!cartItems.length && (
                            <button
                              onClick={() => dispatch(clearCart())}
                              className="bg-red-500 hover:bg-red-400 rounded text-white px-3 py-1 mr-5"
                            >
                              Clear cart
                            </button>
                          )}

                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => dispatch(toggleCart())}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {!!cartItems.length ? (
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cartItems.map((product) => (
                                <CartItem key={product.id} product={product} />
                              ))}
                            </ul>
                          ) : (
                            <div>
                              <h3 className="text-red-500">
                                Your cart is empty!
                              </h3>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {!!cartItems.length && (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <div
                            onClick={doCheckout}
                            className="flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </div>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => dispatch(toggleCart())}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
