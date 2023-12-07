import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import InfoItem from "./components/InfoItem";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <InfoItem />
      </div>
    </>
  );
}

export default App;
