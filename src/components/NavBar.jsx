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
        <div className="fixed top-24 z-10 w-full h-full flex justify-center">
          <div className=" bg-white w-11/12 h-2/5">
            <h2>cart is empty</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
