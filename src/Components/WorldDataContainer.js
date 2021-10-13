import React, { useContext } from "react";
import { Container, Grid, Paper } from "@mui/material";
import Context from "../store/Context";

const WorldDataContainer = () => {
  const context = useContext(Context);
  return (
    <Container>
      <Grid container spacing={2} spacing={4}>
        <Grid item md={12}>
          <Paper elevation={3}>
            <h3>World news first ({context.initData["Last Update"]})</h3>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            Cases: {context.initData["Total Cases_text"]}{" "}
            {context.initData["New Cases_text"]}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>Recovered: {context.initData["Total Recovered_text"]}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            Deaths {context.initData["Total Deaths_text"]}{" "}
            {context.initData["New Deaths_text"]}{" "}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorldDataContainer;
