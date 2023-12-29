import { useState } from "react";
import NavBar from "./NavBar";
import CloseIcon from "../images/icon-close.svg";

function Menu() {
  const [closeMenu, setCloseMenu] = useState(false);
  const Close = () => {
    setCloseMenu(true);
  };
  return (
    <>
      {!closeMenu && (
        <div>
          <div className="fixed top-0 bg-FEBlackLightBox opacity-60 w-screen h-screen z-40"></div>
          <div className="fixed top-0 w-3/4 h-screen pl-4 bg-FEWhite opacity-100 z-50">
            <div className="py-4">
              <img src={CloseIcon} alt="" onClick={Close} />
            </div>
            <div className="pt-4 font-FEKumbhSans font-bold text-base">
              <div className="mb-4">Collections</div>
              <div className="mb-4">Men</div>
              <div className="mb-4">Women</div>
              <div className="mb-4">About</div>
              <div className="mb-4">Contact</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Menu;
