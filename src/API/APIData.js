import React from "react";
import Button from "@mui/material/Button";

import classes from "./APIData.module.css";

const APIData = () => {
  async function fetchDataHandler(e) {
    const country = e.target.value;
    const response = await fetch(
      `https://covid-19.dataflowkit.com/v1/${country}`
    );
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className={classes.btnPlace}>
      <Button variant="outlined" value="lithuania" onClick={fetchDataHandler}>
        Lithuania
      </Button>
      <Button variant="outlined" value="latvia" onClick={fetchDataHandler}>
        Latvia
      </Button>
      <Button variant="outlined" value="estonia" onClick={fetchDataHandler}>
        Estonia
      </Button>
    </div>
  );
};

export default APIData;
