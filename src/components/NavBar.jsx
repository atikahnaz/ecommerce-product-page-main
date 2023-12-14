import { useState } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";

function NavBar({ item }) {
  const [cartItem, setCartItem] = useState(item);
  const [cartVisible, setCartVisible] = useState(false);

  const ViewCart = () => {
    setCartVisible(cartVisible === false ? true : false);
  };

  return (
    <>
      <div className=" flex  m-6 justify-between ">
        <div className="flex ">
          <img className="object-contain" src={Menu}></img>
          <img className="object-contain pl-3" src={Logo}></img>
        </div>
        <div className="flex ">
          <img
            className="object-contain "
            src={Cart}
            alt="cart"
            onClick={ViewCart}
          />
          <img className="w-5 h-auto ml-5" src={Profile} alt="profile" />
        </div>
      </div>

      {cartVisible && (
        <div className="font-FEKumbhSans text-base absolute top-24 z-10 w-full h-full flex justify-center">
          <div className=" bg-white w-11/12 h-2/5 p-4">
            <div className=" font-bold mb-4">Cart</div>
            <div>-----</div>
            <div className="flex justify-between my-5">
              <img
                className=" w-12 h-12 rounded-md"
                src="src/images/image-product-1-thumbnail.jpg"
                alt=""
              />
              <div className=" text-FEDarkGrayishBlue">
                <div className="">Fall Limited Edition Sneakers</div>
                <div className="flex">
                  <div>$125.00</div>
                  <div> x 3 </div>
                  <div className=" text-FEVeryDarkBlue font-bold">$375.00</div>
                </div>
              </div>
              <img
                className=" object-contain"
                src="src/images/icon-delete.svg"
                alt=""
              />
            </div>
            <div className=" bg-FEOrange text-FEWhite text-center rounded-lg py-3 font-bold">
              Checkout
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
