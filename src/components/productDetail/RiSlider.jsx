import { useState } from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const RiSlider = ({ items }) => {
  const [selected, setSelected] = useState(0);
  const [full, setfull] = useState(false);
  const [hovered, sethovered] = useState(false);

  function goPrev() {
    if (selected < 1) {
      return;
    }
    setSelected((prev) => prev - 1);
  }
  function goNext() {
    if (selected === items.length - 1) {
      return;
    }
    setSelected((prev) => prev + 1);
  }
  return (
    <div
      className={`w-full bg-white select-none ${
        full ? "fixed inset-0 z-50" : "my-8"
      }`}
    >
      {/* main image */}
      <div
        className="relative w-full bg-gray-900"
        onMouseOver={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
      >
        <img
          src={items[selected]}
          alt=""
          className={`mx-auto w-full  ${
            full
              ? "h-[calc(100vh-116px)] object-contain"
              : "h-[420px] object-cover"
          }`}
        />

        {/* controller icons */}
        <div>
          <div
            className={`${
              !hovered ? "opacity-0" : ""
            } transition-opacity absolute top-5 right-[100px] text-white p-2 rounded-full cursor-pointer bg-black/50 backdrop-blur-sm`}
          >
            <ShareIcon className="w-5" />
          </div>

          <div
            className={`${
              !hovered ? "opacity-0" : ""
            } transition-opacity absolute top-5 right-5 text-white p-2 rounded-full cursor-pointer bg-black/50 backdrop-blur-sm`}
          >
            <HeartIcon className="w-5" />
          </div>

          {!!selected > 0 && (
            <div
              onClick={goPrev}
              className={`${
                !hovered ? "opacity-0" : ""
              } transition-opacity absolute top-[45%] left-5 text-white p-2 rounded cursor-pointer bg-black/50 backdrop-blur-sm`}
            >
              <ArrowSmallLeftIcon className="w-5" />
            </div>
          )}

          {!!(selected < items.length - 1) && (
            <div
              onClick={goNext}
              className={`${
                !hovered ? "opacity-0" : ""
              } transition-opacity absolute top-[45%] right-5 text-white p-2 rounded cursor-pointer bg-black/50 backdrop-blur-sm`}
            >
              <ArrowSmallRightIcon className="w-5" />
            </div>
          )}

          <div
            onClick={() => setfull(!full)}
            className={`${
              !hovered ? "opacity-0" : ""
            } transition-opacity absolute bottom-5 right-5 text-white p-2 rounded cursor-pointer bg-black/50 backdrop-blur-sm`}
          >
            {full ? (
              <ArrowsPointingInIcon className="w-5" />
            ) : (
              <ArrowsPointingOutIcon className="w-5" />
            )}
          </div>
        </div>
      </div>

      {/* slider */}
      <div
        className={`flex gap-2 py-2 overflow-auto [&::-webkit-scrollbar]:bg-black/20 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-brand [&::-webkit-scrollbar-thumb]:rounded-full ${
          full ? "bg-gray-900" : ""
        }`}
      >
        {items.map((el, i) => (
          <img
            onClick={() => setSelected(i)}
            key={i}
            src={el}
            alt=""
            className={`w-20 lg:w-[100px] aspect-square object-cover border-2 cursor-pointer ${
              i === selected ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RiSlider;
