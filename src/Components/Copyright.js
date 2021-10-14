import classes from "./Copyright.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Copyright = () => {
  return (
    <div className={classes.copyright}>
      <CopyrightIcon fontSize={"small"} />
      <p>All rights reserved</p>
      <a href="https://devportfolio.eu/">Made by Mantvydas</a>
    </div>
  );
};

export default Copyright;
