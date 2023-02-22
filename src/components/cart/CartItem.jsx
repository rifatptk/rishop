import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.brand} - {product.category}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            Qty{" "}
            <button
              disabled={product.quantity < 2}
              onClick={() =>
                dispatch(
                  decrementQuantity({
                    productId: product.id,
                  })
                )
              }
              className={`px-3 rounded mx-3 ${
                product.quantity < 2 ? "bg-gray-300" : "bg-blue-500"
              } text-white font-bold`}
            >
              -
            </button>
            {product.quantity}{" "}
            <button
              disabled={product.quantity >= product.stock}
              onClick={() =>
                dispatch(
                  incrementQuantity({
                    productId: product.id,
                  })
                )
              }
              className={`px-3 rounded ml-3 ${
                product.quantity >= product.stock
                  ? "bg-gray-300"
                  : "bg-blue-500"
              } text-white font-bold`}
            >
              +
            </button>
          </p>

          <div className="flex">
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
