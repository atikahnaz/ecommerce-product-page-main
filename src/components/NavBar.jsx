import { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";
import CollapseMenu from "./CollapseMenu";

function NavBar({ item, toRemove }) {
  const [cartItem, setCartItem] = useState(item);
  const [cartVisible, setCartVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setCartItem(item);
  }, [item]);

  const ViewCart = () => {
    setCartVisible(cartVisible === false ? true : false);
  };

  const Delete = () => {
    toRemove();
  };

  const ShowMenuBar = () => {
    setShowMenu(showMenu === false ? true : false);
  };

  return (
    <>
      {showMenu && <CollapseMenu />}
      <div className=" flex  m-6 justify-between md:py-5 md:border-b-2">
        <div className="flex md:items-baseline">
          <img
            className="object-contain md:hidden"
            src={Menu}
            onClick={ShowMenuBar}
          ></img>

          <img className="object-contain pl-3" src={Logo}></img>
          {/**menu bar for desktop */}
          <div className="hidden md:flex space-x-10 ml-10  text-FEGrayishBlue font-FEKumbhSans font-bold">
            <div>Collection</div>
            <div>Men</div>
            <div>Women</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex ">
          <img
            className="object-contain "
            src={Cart}
            alt="cart"
            onClick={ViewCart}
          />
          <img
            className="w-5 h-auto ml-5 md:w-10"
            src={Profile}
            alt="profile"
          />
        </div>
      </div>

      {cartVisible && (
        <div className="font-FEKumbhSans text-base absolute top-24 z-10 w-full  flex justify-center md:w-96 md:right-4">
          <div className=" bg-white w-11/12 h-1/3 p-4 rounded-md shadow-xl">
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
              <div className="flex justify-center my-14 items-center ">
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
