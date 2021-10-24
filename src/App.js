import React from "react";
import "./App.css";
import APIData from "./API/APIData";
import DataContainer from "./Components/DataContainer";
import Header from "./Components/Header";
import WorldDataContainer from "./Components/WorldDataContainer";
import Copyright from "./Components/Copyright";

function App() {
  return (
    <>
      <APIData />
      <Header />
      <WorldDataContainer />
      <DataContainer />
      <Copyright />
    </>
  );
}

export default App;
