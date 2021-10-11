import React from "react";
import "./App.css";
import APIData from "./API/APIData";
import DataContainer from "./Components/DataContainer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <APIData />
      <DataContainer />
    </>
  );
}

export default App;
