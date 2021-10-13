import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";

import classes from "./APIData.module.css";
import Context from "../store/Context";

const APIData = () => {
  const context = useContext(Context);

  useEffect(() => {
    const fetchInitData = async () => {
      context.setIsLoadingInit(true);
      try {
        const response = await fetch(
          "https://covid-19.dataflowkit.com/v1/World"
        );
        const data = await response.json();
        context.setInitData(data);
        console.log(data);
      } catch (error) {
        context.setError(error.message);
      }
      context.setIsLoadingInit(false);
    };
    fetchInitData();
  }, []);

  const fetchDataHandler = async (e) => {
    context.setIsLoading(true);
    context.setError(null);
    const country = e.target.value;

    try {
      const response = await Promise.all([
        fetch(`https://covid-19.dataflowkit.com/v1/${country}`),
        fetch(
          `https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`
        ),
      ]);

      // Can't use !response.ok, because 2nd API always returns response OK. Doesn't matter if there is a error or not, but response is OK
      // if (!response.ok) {
      //   //       throw new Error("Something went wrong!");
      //   //     }

      const data = await Promise.all(response.map((r) => r.json()));
      context.setDataFromAPi(data);
    } catch (error) {
      context.setError(error.message);
    }

    context.setIsLoading(false);
  };

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
