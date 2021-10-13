import React from "react";
import "./App.css";
import APIData from "./API/APIData";
import DataContainer from "./Components/DataContainer";
import Header from "./Components/Header";
import WorldDataContainer from "./Components/WorldDataContainer";

function App() {
  return (
    <>
      <Header />
      <WorldDataContainer />
      <APIData />
      <DataContainer />
    </>
  );
}

export default App;
