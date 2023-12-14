import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import InfoItem from "./components/InfoItem";
import ImagePreview from "./components/ImagePreview";
import Slides from "./images.json";

function App() {
  const item = {
    name: "Fall Limited Edition Sneakers",
    img: "Slide[0].img",
    price: 125.0,
    quantity: 3,
  };
  return (
    <>
      <div className="">
        <NavBar item={item} />
        <ImagePreview slides={Slides} />

        <InfoItem />
      </div>
    </>
  );
}

export default App;
