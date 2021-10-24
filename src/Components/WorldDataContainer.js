import React, { useContext } from "react";
import { Container, Grid, Paper, CircularProgress } from "@mui/material";
import classes from "./WorldDataContainer.module.css";
import Context from "../store/Context";
import AddReactionSharpIcon from "@mui/icons-material/AddReactionSharp";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import PublicIcon from "@mui/icons-material/Public";

const WorldDataContainer = () => {
  const context = useContext(Context);
  return (
    <Container className={classes.container}>
      {context.isLoadingInit && <CircularProgress color="inherit" />}
      {!context.isLoadingInit && !context.error && (
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Paper elevation={6} className={classes.paper1}>
              <h3>
                {" "}
                <PublicIcon color={"action"} fontSize={"large"} />
                World news ({context.initData["Last Update"]})
              </h3>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={4} className={classes.paper_other}>
              <CoronavirusIcon fontSize={"small"} color={"primary"} />
              <p>Cases: </p>
              <p>{context.initData["Total Cases_text"]}</p>{" "}
              <p className={classes.red}>
                {context.initData["New Cases_text"]}
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={4} className={classes.paper_other}>
              <AddReactionSharpIcon fontSize={"small"} color={"success"} />{" "}
              Recovered: {context.initData["Total Recovered_text"]}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={4} className={classes.paper_other}>
              <AirlineSeatIndividualSuiteIcon
                fontSize={"small"}
                color={"error"}
              />
              <p>Deaths </p>
              <p>{context.initData["Total Deaths_text"]} </p>{" "}
              <p className={classes.red}>
                {context.initData["New Deaths_text"]}{" "}
              </p>{" "}
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default WorldDataContainer;
