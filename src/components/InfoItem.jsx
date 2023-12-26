import { useState } from "react";

import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";

function InfoItem({ callbackUpdateCart }) {
  return (
    <>
      <div className=" font-FEKumbhSans relative m-6">
        <h6 className=" text-xs font-bold tracking-1 text-FEOrange mb-3 sm:text-base">
          SNEAKER COMPANY
        </h6>
        <h1 className=" text-3xl font-bold mb-3 md:text-6xl">
          Fall Limited Edition Sneakers
        </h1>
        <h6 className=" text-base text-FEDarkGrayishBlue mb-3 tracking-tight md:text-xl md:tracking-normal ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </h6>
      </div>
      <PriceItem callback={callbackUpdateCart} />
    </>
  );
}

function PriceItem({ callback }) {
  const [quantity, setQuantity] = useState(0);

  const Add = () => {
    setQuantity(quantity + 1);
  };

  const Remove = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  // callback function

  return (
    <div className="font-FEKumbhSans m-6">
      <div className="flex justify-between items-center mb-5 md:flex md:flex-col md:items-start">
        <div className="flex flex-row items-center">
          <div className=" font-bold text-4xl mr-3">$125.00</div>
          <div className=" text-FEOrange bg-FEPaleOrange font-bold py-1 px-2 rounded-lg">
            50%
          </div>
        </div>

        <div className=" text-FEGrayishBlue deco font-bold line-through">
          $250.00
        </div>
      </div>
      <div className="md:flex cursor-pointer">
        <div className="flex justify-between items-center bg-FELightGrayishBlue py-4 px-5 rounded-xl mb-5 md:w-1/3 md:mb-0 md:mr-3">
          <img
            className=" object-contain"
            onClick={Remove}
            src={Minus}
            alt=""
          />
          <div className="font-bold">{quantity}</div>
          <img className="object-contain" onClick={Add} src={Plus} alt="" />
        </div>

        <div
          className="flex items-center justify-center bg-FEOrange py-4 rounded-xl md:w-2/3 "
          onClick={() => {
            callback(quantity);
          }}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fillRule="nonzero"
            />
          </svg>
          <div className=" text-FEWhite font-bold ml-4">Add to cart</div>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
