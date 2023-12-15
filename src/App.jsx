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
      <div className="">
        <NavBar item={item} toRemove={deleteItem} />
        <ImagePreview slides={Slides} />

        <InfoItem callbackUpdateCart={updateCart} />
      </div>
    </>
  );
}

export default App;
