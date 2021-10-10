import React, { useContext } from "react";
import classes from "./DataContainer.module.css";
import { Container } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import Context from "../store/Context";

const DataContainer = () => {
  const context = useContext(Context);

  // console.log(context.dataFromAPI);
  return (
    <>
      {context.isLoading && (
        <Container maxWidth="xs" className={classes.loading}>
          <p>Loading...</p> <LoopIcon className={classes.loopIcon} />
        </Container>
      )}
      {!context.isLoading && context.error && (
        <Container>
          {" "}
          <div>{context.error}</div>
        </Container>
      )}
      {Object.keys(context.dataFromAPI).length > 0 && (
        <Container maxWidth="md" className={classes.textContainer}>
          <h2>
            {" "}
            Any positive news about Covid in{" "}
            {context.dataFromAPI["Country_text"]}?
          </h2>
          <h3>Latest news as of {context.dataFromAPI["Last Update"]}</h3>
          <h3>
            Total recovered people{" "}
            {context.dataFromAPI["Total Recovered_text"].replace(/,/g, " ")}.
            That is{" "}
            {Math.round(
              (context.dataFromAPI["Total Recovered_text"].replace(/,/g, ".") *
                100) /
                context.dataFromAPI["Total Cases_text"].replace(/,/g, ".")
            )}
            % of total cases.
          </h3>
          <h2>Not so good news...</h2>
          <h3>
            Daily new cases :{" "}
            {context.dataFromAPI["New Cases_text"].replace(/,/g, "")}
          </h3>
        </Container>
      )}
    </>
  );
};

export default DataContainer;
