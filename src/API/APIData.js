import React, { useContext, useEffect } from "react";
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

      // context.setIsLoading(false);
      // console.log(Object.values(data));
      context.setDataFromAPi(data);
    } catch (error) {
      context.setError(error.message);
    }

    try {
      async function fetchMoreDataHandler() {
        const response2 = await fetch(
          `https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`
        );
        const data2 = await response2.json();
        if (!response2.ok) {
          throw new Error("Something vent wrong");
        }
        context.setMoreDataFromAPI(data2.All);
      }
      fetchMoreDataHandler();
    } catch (error) {
      context.setError(error.message);
    }
    context.setIsLoading(false);
  }

  return (
    <div className={classes.btnPlace}>
      <Button variant="outlined" value="Lithuania" onClick={fetchDataHandler}>
        Lithuania
      </Button>
      <Button variant="outlined" value="Latvia" onClick={fetchDataHandler}>
        Latvia
      </Button>
      <Button variant="outlined" value="Estonia" onClick={fetchDataHandler}>
        Estonia
      </Button>
    </div>
  );
};

export default APIData;
