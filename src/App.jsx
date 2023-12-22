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
      <div className="lg:mx-24">
        <NavBar item={item} toRemove={deleteItem} />
        <div className="lg:flex lg:items-center lg:mx-24">
          <div className="lg:">
            <ImagePreview slides={Slides} />
          </div>
          <div className="lg:ml-24">
            <InfoItem callbackUpdateCart={updateCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
