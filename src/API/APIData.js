import React, { useContext } from "react";
import Button from "@mui/material/Button";

import classes from "./APIData.module.css";
import Context from "../store/Context";

const APIData = () => {
  const context = useContext(Context);

  async function fetchDataHandler(e) {
    context.setIsLoading(true);
    context.setError(null);
    const country = e.target.value;

    try {
      const response = await fetch(
        `https://covid-19.dataflowkit.com/v1/${country}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      context.setIsLoading(false);
      // console.log(Object.values(data));
      context.setDataFromAPi(data);
    } catch (error) {
      context.setError(error.message);
    }
    context.setIsLoading(false);
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
