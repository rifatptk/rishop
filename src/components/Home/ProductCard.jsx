import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlinedIcon } from "@heroicons/react/24/outline";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { addItemsToCheckout } from "../../redux/features/checkout/checkoutSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function buyNow() {
    dispatch(addItemsToCheckout([product]));
    navigate("/checkout");
  }

  function renderRating() {
    const ratings = new Array(Math.floor(product.rating)).fill(true);
    while (ratings.length < 5) {
      ratings.push(false);
    }
    return (
      <>
        {ratings.map((el, i) => (
          <span key={i} className="text-yellow-500 [&>svg]:w-5">
            {el ? <StarIcon /> : <StarOutlinedIcon />}
          </span>
        ))}
      </>
    );
  }

  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <Link
        to={`/products/${product.id}`}
        className="mt-4 flex justify-between"
      >
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <div className="flex">{renderRating()}</div>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </Link>
      <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          className="rounded bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm px-2 py-1 text-sm"
        >
          Add to cart
        </button>
        <button
          onClick={buyNow}
          className="rounded bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm px-2 py-1 text-sm"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
