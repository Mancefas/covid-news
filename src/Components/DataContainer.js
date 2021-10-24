import React, { useContext } from "react";
import classes from "./DataContainer.module.css";
import { Container, Grid, Paper, Box } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import Context from "../store/Context";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import AddReactionSharpIcon from "@mui/icons-material/AddReactionSharp";

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
        <Container className={classes.failed}>
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            {context.error} data
          </Box>
        </Container>
      )}
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          {context.dataFromAPI.length > 0 && (
            <Container className={classes.numbers}>
              <Grid container spacing={2}>
                {context.dataFromAPI.map((el) => (
                  <Grid item xs={12} sm={12}>
                    <Paper elevation={4} className={classes.firstContainer}>
                      <h3>
                        Any good news in{" "}
                        {el.All.abbreviation === "LT" ? "Lithuania" : ""}
                        {el.All.abbreviation === "LV" ? "Latvia" : ""}
                        {el.All.abbreviation === "EE" ? "Estonia" : ""} ?
                      </h3>
                      <h4>Latest news as of {el.All.updated}</h4>
                      <p>
                        There are {el.All.people_vaccinated} fully vaccinated
                        people. That is{" "}
                        {Math.round(
                          (el.All.people_vaccinated * 100) / el.All.population
                        )}
                        % of population.
                      </p>
                      <p>
                        And there are {el.All.people_partially_vaccinated}{" "}
                        partially vaccinated people.{" "}
                      </p>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </Grid>

        <Grid item xs={6} sm={6}>
          {/* Data From dif API  */}
          {context.dataFromAPI2.length > 0 && (
            <Container className={classes.numbers}>
              <Grid container spacing={2}>
                {context.dataFromAPI2.map((el) => (
                  <Grid item xs={12} sm={12}>
                    <Paper elevation={4} className={classes.secondContainer}>
                      <h3>
                        Not good news in{" "}
                        {el["Country_text"] === "Lithuania" ? "Lithuania" : ""}
                        {el["Country_text"] === "Latvia" ? "Latvia" : ""}
                        {el["Country_text"] === "Estonia" ? "Estonia" : ""}...
                      </h3>
                      <h4>Latest news as of {el["Last Update"]}</h4>
                      <p>
                        <CoronavirusIcon fontSize={"small"} color={"primary"} />
                        Cases: {el["Total Cases_text"].replace(",", "")}{" "}
                        {el["New Cases_text"].replace(",", "")}
                      </p>
                      <p>
                        {" "}
                        <AirlineSeatIndividualSuiteIcon
                          fontSize={"small"}
                          color={"error"}
                        />
                        Deaths {el["Total Deaths_text"].replace(",", "")}{" "}
                        {el["New Deaths_text"]}{" "}
                      </p>
                      <p>
                        <AddReactionSharpIcon
                          fontSize={"small"}
                          color={"success"}
                        />{" "}
                        Recovered:{" "}
                        {el["Total Recovered_text"].replace(",", " ")}
                      </p>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default DataContainer;
