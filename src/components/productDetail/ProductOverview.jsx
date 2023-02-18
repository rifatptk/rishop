import useGetData from "../../hooks/useGetData";
import { useNavigate, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import RiSlider from "./RiSlider";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlinedIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCheckout } from "../../redux/features/checkout/checkoutSlice";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";

export default function ProductOverview() {
  const pathname = window.location.pathname;
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useGetData({
    endpoint: `/products/${productId}`,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  // Function executed when add to cart button clicked
  function addToCartFn() {
    if (!isAuth) {
      toast.error("Login required");
      return;
    }
    dispatch(addToCart({ ...product, quantity: 1 }));
  }

  // Function executed when buy now button clicked
  function buyNow() {
    if (!isAuth) {
      toast.error("Login required");
      return navigate("/login");
    }
    dispatch(addItemsToCheckout([product]));
    navigate("/checkout");
  }

  // Renders ratings
  function renderRating() {
    const ratings = new Array(Math.floor(product.rating)).fill(true);
    while (ratings.length < 5) {
      ratings.push(false);
    }
    return (
      <div className="flex">
        {ratings.map((el, i) => (
          <span key={i} className="text-yellow-500 [&>svg]:w-5">
            {el ? <StarIcon /> : <StarOutlinedIcon />}
          </span>
        ))}
      </div>
    );
  }

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
    <div className="pt-6 container mx-auto">
      {/* Image gallery */}
      <div className="lg:flex [&>div]:flex-1">
        <div>
          <RiSlider items={product.images} />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                {renderRating()}
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  237
                </p>
              </div>
            </div>
          </div>

          <div className="py-10 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      100% Authentic product
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      7 Days Money return guarantee
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">24/7 Customer support</span>
                  </li>
                </ul>
              </div>
            </div>
            {!pathname.includes("admin") && (
              <div className="flex gap-5 mt-5">
                <button
                  onClick={buyNow}
                  className="bg-green-600 text-white font-bold px-5 py-2 rounded"
                >
                  Buy now
                </button>
                <button
                  onClick={addToCartFn}
                  className="bg-blue-500 text-white font-bold px-5 py-2 rounded"
                >
                  Add to cart
                </button>
              </div>
            )}

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6 text-sm text-gray-600">
                <p>{product.description}</p>
                <p>
                  Et reiciendis cupiditate nemo ullam laborum? Recusandae,
                  distinctio voluptatibus. Quisquam dignissimos, accusamus rem
                  repellendus deleniti minus maxime mollitia architecto magnam
                  minima alias ad autem amet, omnis adipisci impedit, fuga sint
                  asperiores reprehenderit? Autem, sunt vero? Quidem consectetur
                  autem temporibus voluptas nam minus harum, illo facilis
                  accusamus, praesentium illum repellendus. Officia beatae
                  perspiciatis inventore id modi molestiae consequatur deserunt
                  in odit veniam, minima optio repudiandae quasi, iste aperiam!
                  Asperiores quisquam nam dolore sapiente beatae quis, cum nobis
                  rerum, quod quas molestias mollitia aliquam minus perferendis
                  maxime magni eaque, ipsam accusantium. Sit non amet expedita
                  distinctio odio nisi enim officia ducimus ullam suscipit qui,
                  quod cumque sint at inventore sapiente itaque ipsa? Quibusdam
                  autem iure placeat, odit quia cum neque voluptatum totam
                  excepturi dignissimos deserunt molestiae esse voluptatibus
                  ullam?
                </p>
                <p>
                  Eius repellendus eligendi quasi recusandae iure provident
                  totam quod quae a excepturi molestiae enim magnam quidem
                  labore expedita, officia, repudiandae nobis placeat impedit
                  corporis quo? Facere laudantium quibusdam a vero laboriosam
                  obcaecati quam perferendis, quidem, eaque nostrum molestiae
                  est voluptas quis quasi odio porro fuga! Quam assumenda vitae
                  animi alias doloribus. Vitae placeat repellendus odio minus
                  qui. Pariatur autem velit voluptas? Numquam eaque suscipit,
                  animi necessitatibus iste unde qui excepturi quaerat hic
                  placeat corporis maiores nemo adipisci at eveniet pariatur
                  vitae, explicabo impedit harum porro quod deleniti quam
                  debitis? Sed obcaecati fugit eligendi dolor voluptates ratione
                  maxime sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
