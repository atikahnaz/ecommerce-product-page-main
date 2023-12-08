import Cart from "../images/icon-cart.svg";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";

function PriceItem() {
  return (
    <div className="font-FEKumbhSans m-6">
      <div className="flex justify-between">
        <div>$125</div>
        <div>50%</div>
        <div>$250</div>
      </div>
      <div className="flex justify-between">
        <img className=" object-contain" src={Minus} alt="" />
        <div>0</div>
        <img className="object-contain" src={Plus} alt="" />
      </div>
      <div className="flex">
        <img src={Cart} alt="" />
        <div>Add to cart</div>
      </div>
    </div>
  );
}

function InfoItem() {
  return (
    <>
      <div className=" font-FEKumbhSans m-6">
        <h6 className=" text-xs font-bold tracking-1 text-FEOrange mb-3 ">
          SNEAKER COMPANY
        </h6>
        <h1 className=" text-3xl font-bold mb-3">
          Fall Limited Edition Sneakers
        </h1>
        <h6 className=" text-base text-FEDarkGrayishBlue mb-3 tracking-tight">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </h6>
      </div>
      <PriceItem />
    </>
  );
}

export default InfoItem;
