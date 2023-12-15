import { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";

function NavBar({ item, toRemove }) {
  const [cartItem, setCartItem] = useState(item);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    setCartItem(item);
  }, [item]);

  const ViewCart = () => {
    setCartVisible(cartVisible === false ? true : false);
  };

  const Delete = () => {
    toRemove();
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
          <div className=" bg-white w-11/12 h-2/5 p-4 rounded-md">
            <div className=" font-bold mb-3">Cart</div>
            <div
              className=" border-b-2"
              style={{ padding: 0, margin: 0 }}
            ></div>
            {cartItem.quantity > 0 ? (
              <div className="flex flex-col w-full h-full">
                <div className="flex justify-between my-5">
                  <img
                    className=" w-12 h-12 rounded-md"
                    src="src/images/image-product-1-thumbnail.jpg"
                    alt=""
                  />
                  <div className=" text-FEDarkGrayishBlue">
                    <div className="">{cartItem.name}</div>
                    <div className="flex">
                      <div>${cartItem.price}.00</div>
                      <div> x </div>
                      <div>{cartItem.quantity}</div>
                      <div className=" text-FEVeryDarkBlue font-bold">
                        ${cartItem.price * cartItem.quantity}.00
                      </div>
                    </div>
                  </div>
                  <img
                    className=" object-contain"
                    src="src/images/icon-delete.svg"
                    alt=""
                    onClick={Delete}
                  />
                </div>
                <div className=" bg-FEOrange text-FEWhite text-center rounded-lg py-4 font-bold">
                  Checkout
                </div>
              </div>
            ) : (
              <div className="flex justify-center h-2/4 items-center ">
                Cart is empty
              </div>
            )}
            {/*Cart box */}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
