import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import InfoItem from "./components/InfoItem";
import ImagePreview from "./components/ImagePreview";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <ImagePreview />

        <InfoItem />
      </div>
    </>
  );
}

export default App;
