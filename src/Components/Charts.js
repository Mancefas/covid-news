import React, { useContext } from "react";
import Context from "../store/Context";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { Container } from "@mui/material";

const Charts = () => {
  const context = useContext(Context);

  const data = context.dataFromAPI2.map((elm) => ({
    country: elm["Country_text"],
    cases: +elm["New Cases_text"].replace(",", "").replace("+", ""),
  }));

  return (
    <>
      {data.length > 0 && (
        <Container maxWidth="xs" sx={{ textAlign: "center", p: "1rem" }}>
          <h3>Daily Cases</h3>
          <VictoryChart domainPadding={35}>
            <VictoryAxis
              tickValues={[1, 2, 3]}
              tickFormat={[
                `${data[0].country}`,
                `${data[1].country}`,
                `${data[2].country}`,
              ]}
            />
            <VictoryAxis dependentAxis />
            <VictoryBar data={data} x={"country"} y={"cases"} />
          </VictoryChart>
        </Container>
      )}
    </>
  );
};

export default Charts;
