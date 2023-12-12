import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import InfoItem from "./components/InfoItem";
import ImagePreview from "./components/ImagePreview";
import Slides from "./images.json";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <ImagePreview slides={Slides} />

        <InfoItem />
      </div>
    </>
  );
}

export default App;
