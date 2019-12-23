import React from "react";
import "./App.css";
import Banner from "./banner/Banner";
import PatanjaliHeader from "./header/PatanjaliHeader";
import PatanjaliMenu from "./menu/PatanjaliMenu";

function App() {
  return (
    <div className="App">
      <PatanjaliHeader />
      <PatanjaliMenu />
      <Banner />
    </div>
  );
}

export default App;
