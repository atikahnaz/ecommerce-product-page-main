import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import InfoItem from "./components/InfoItem";
import ImagePreview from "./components/ImagePreview";
import Slides from "./images.json";

function App() {
  const [quantity, setQuantity] = useState(0);

  const item = {
    name: "Fall Limited Edition Sneakers",
    img: "Slide[0].img",
    price: 125.0,
    quantity: quantity,
  };

  const updateCart = (total) => {
    setQuantity(total);
  };

  const deleteItem = () => {
    setQuantity(0);
  };

  return (
    <>
      <div className="md:mx-24">
        <NavBar item={item} toRemove={deleteItem} />
        <div className="md:flex md:items-center md:mx-24">
          <div className="md:">
            <ImagePreview slides={Slides} />
          </div>
          <div className="md:ml-24">
            <InfoItem callbackUpdateCart={updateCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
