import React, { useContext } from "react";
import classes from "./DataContainer.module.css";
import { Container } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import Context from "../store/Context";

const DataContainer = () => {
  const context = useContext(Context);

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
          <h3>
            {" "}
            Any positive news about Covid in{" "}
            {context.dataFromAPI[0]["Country_text"]}?
          </h3>
          <h3>Latest news as of {context.dataFromAPI[0]["Last Update"]}</h3>
          <p>
            Total recovered people{" "}
            {context.dataFromAPI[0]["Total Recovered_text"].replace(/,/g, " ")}.
            That is{" "}
            {Math.round(
              (context.dataFromAPI[0]["Total Recovered_text"].replace(
                /,/g,
                "."
              ) *
                100) /
                context.dataFromAPI[0]["Total Cases_text"].replace(/,/g, ".")
            )}
            % of total cases.
          </p>
          <p>
            Total fully vaccinated people{" "}
            {context.dataFromAPI[1].All.people_vaccinated}. That is{" "}
            {Math.round(
              (context.dataFromAPI[1].All.people_vaccinated * 100) /
                context.dataFromAPI[1].All.population
            )}
            % of population.
          </p>
          <p>
            And there are{" "}
            {context.dataFromAPI[1].All.people_partially_vaccinated} partially
            vaccinated people.{" "}
          </p>
          <p></p>
          <h3>Not so good news...</h3>
          <p>
            Daily new cases :{" "}
            {context.dataFromAPI[0]["New Cases_text"].replace(/,/g, "")}
          </p>
        </Container>
      )}
    </>
  );
};

export default DataContainer;
