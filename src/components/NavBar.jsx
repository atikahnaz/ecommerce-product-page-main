import Logo from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";

function NavBar() {
  return (
    <>
      <div className="flex  m-6 justify-between">
        <div className="flex ">
          <img className="object-contain" src={Menu}></img>
          <img className="object-contain pl-3" src={Logo}></img>
        </div>
        <div className="flex ">
          <img className="object-contain " src={Cart} alt="cart" />
          <img className="w-5 h-auto ml-5" src={Profile} alt="profile" />
        </div>

        {/** */}
      </div>
    </>
  );
}

export default NavBar;
