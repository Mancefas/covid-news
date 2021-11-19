import React, { useState, useEffect } from "react";
import {
  Container,
  Autocomplete,
  TextField,
  Grid,
  Paper,
  Box,
} from "@mui/material/";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import AddReactionSharpIcon from "@mui/icons-material/AddReactionSharp";

import classes from "./SearchCountry.module.css";

const SearchCountry = () => {
  const countries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain ",
    "Sweden",
    "Russia",
    "UK",
  ];

  const [value, setValue] = useState();

  const [gotCountryData, setGotCountryData] = useState();

  const dataFetch = async (countrySelected) => {
    const response = await fetch(
      `https://covid-19.dataflowkit.com/v1/${countrySelected}`
    );
    const data = await response.json();
    setGotCountryData(data);
  };

  useEffect(() => {
    dataFetch(value);
  }, [value]);

  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Autocomplete
          disablePortal
          value={value}
          onChange={(event, val) => setValue(val)}
          id="combo-box-demo"
          options={countries}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Different Country" />
          )}
        />
      </Container>

      {gotCountryData && value && (
        <Container sx={{ textAlign: "center" }}>
          <Grid item xs={10} sm={6} sx={{ margin: "auto" }}>
            <Paper elevation={4} sx={{ minHeight: "25vh" }}>
              <h4>Latest news as of {gotCountryData["Last Update"]}</h4>
              <h3>In {value}</h3>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CoronavirusIcon fontSize={"small"} color={"primary"} />
                <p> Cases: </p>{" "}
                <p> {gotCountryData["Total Cases_text"].replaceAll(",", "")}</p>
                <p className={classes.red}>
                  {" "}
                  {gotCountryData["New Cases_text"].replaceAll(",", "")}
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {" "}
                <AirlineSeatIndividualSuiteIcon
                  fontSize={"small"}
                  color={"error"}
                />
                <p>Deaths </p>
                <p>
                  {gotCountryData["Total Deaths_text"].replaceAll(",", "")}{" "}
                </p>
                <p className={classes.red}>
                  {gotCountryData["New Deaths_text"]}{" "}
                </p>
              </Box>
              <p>
                <AddReactionSharpIcon fontSize={"small"} color={"success"} />{" "}
                Recovered:{" "}
                {gotCountryData["Total Recovered_text"].replaceAll(",", " ")}
              </p>
              <p>
                Death rate :{" "}
                {(
                  (gotCountryData["Total Deaths_text"].replaceAll(",", "") *
                    100) /
                  gotCountryData["Total Cases_text"].replaceAll(",", "")
                ).toFixed(2)}
                % Recovery rate :{" "}
                {(
                  (gotCountryData["Total Recovered_text"].replaceAll(",", "") *
                    100) /
                  (gotCountryData["Total Cases_text"].replaceAll(",", "") -
                    gotCountryData["Active Cases_text"].replaceAll(",", ""))
                ).toFixed(2)}
                %
              </p>
            </Paper>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default SearchCountry;
