import React from "react";
import "./App.css";
import APIData from "./API/APIData";
import DataContainer from "./Components/DataContainer";

function App() {
  return (
    <>
      <APIData />
      <DataContainer />
    </>
  );
}

export default App;
