import Logo from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";

function NavBar() {
  return (
    <>
      <div className="flex p-3 m-3 justify-between">
        <div className="flex">
          <img src={Menu}></img>
          <img className="" src={Logo}></img>
        </div>
        <div className="flex">
          <img src={Cart} alt="cart" />
          <img className="w-7" src={Profile} alt="profile" />
        </div>

        {/** */}
      </div>
    </>
  );
}

export default NavBar;
