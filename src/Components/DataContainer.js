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
    </>
  );
};

export default DataContainer;
