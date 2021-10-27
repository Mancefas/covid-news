import React, { useContext } from "react";
import classes from "./DataContainer.module.css";
import { Container, Grid, Paper, Box } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import Context from "../store/Context";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import AddReactionSharpIcon from "@mui/icons-material/AddReactionSharp";
import PeopleIcon from "@mui/icons-material/People";

const DataContainer = () => {
  const context = useContext(Context);

  console.log(context.dataFromAPI2);

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
                      <h4>Latest news as of {el.All.updated.slice(0, 10)}</h4>
                      <h3>
                        About 💉 in{" "}
                        {el.All.abbreviation === "LT" ? "Lithuania" : ""}
                        {el.All.abbreviation === "LV" ? "Latvia" : ""}
                        {el.All.abbreviation === "EE" ? "Estonia" : ""}
                      </h3>
                      <p>
                        There are {el.All.people_vaccinated} fully vaccinated
                        people.
                      </p>
                      <p className={classes.textRow}>
                        <PeopleIcon /> That is{" "}
                        {Math.round(
                          (el.All.people_vaccinated * 100) / el.All.population
                        )}
                        % of population.
                      </p>
                      {/* <p>
                        Partially vaccinated -{" "}
                        {el.All.people_partially_vaccinated} .{" "}
                      </p> */}
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
                      <h4>Latest news as of {el["Last Update"]}</h4>
                      <h3>
                        In{" "}
                        {el["Country_text"] === "Lithuania" ? "Lithuania" : ""}
                        {el["Country_text"] === "Latvia" ? "Latvia" : ""}
                        {el["Country_text"] === "Estonia" ? "Estonia" : ""}
                      </h3>
                      <div className={classes.textRow}>
                        <CoronavirusIcon fontSize={"small"} color={"primary"} />
                        <p> Cases: </p>{" "}
                        <p> {el["Total Cases_text"].replace(",", "")}</p>
                        <p className={classes.red}>
                          {" "}
                          {el["New Cases_text"].replace(",", "")}
                        </p>
                      </div>
                      <div className={classes.textRow}>
                        {" "}
                        <AirlineSeatIndividualSuiteIcon
                          fontSize={"small"}
                          color={"error"}
                        />
                        <p>Deaths </p>
                        <p>{el["Total Deaths_text"].replace(",", "")} </p>
                        <p className={classes.red}>{el["New Deaths_text"]} </p>
                      </div>
                      <p>
                        <AddReactionSharpIcon
                          fontSize={"small"}
                          color={"success"}
                        />{" "}
                        Recovered:{" "}
                        {el["Total Recovered_text"].replace(",", " ")}
                      </p>
                      <p>
                        Death rate :{" "}
                        {(
                          (el["Total Deaths_text"].replace(",", "") * 100) /
                          el["Total Cases_text"].replace(",", "")
                        ).toFixed(2)}
                        % Recovery rate :{" "}
                        {(
                          (el["Total Recovered_text"].replace(",", "") * 100) /
                          (el["Total Cases_text"].replace(",", "") -
                            el["Active Cases_text"].replace(",", ""))
                        ).toFixed(2)}
                        %
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
