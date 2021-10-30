import { useContext, useEffect } from "react";
import Context from "../store/Context";

const APIData = () => {
  const context = useContext(Context);

  useEffect(() => {
    const fetchInitData = async () => {
      context.setIsLoadingInit(true);
      try {
        const response = await Promise.all([
          fetch("https://covid-19.dataflowkit.com/v1/World"),
          fetch("https://covid-19.dataflowkit.com/v1/Lithuania"),
          fetch("https://covid-19.dataflowkit.com/v1/Latvia"),
          fetch("https://covid-19.dataflowkit.com/v1/Estonia"),
        ]);
        const data = await Promise.all(response.map((r) => r.json()));
        context.setInitData(data[0]);
        context.setDataFromAPI2(data.slice(1, 4));
      } catch (error) {
        context.setError(error.message);
      }
      context.setIsLoadingInit(false);
    };
    fetchInitData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchDataHandler = async () => {
      context.setIsLoading(true);
      context.setError2(null);
      // const country = e.target.value;

      try {
        const response = await Promise.all([
          fetch(
            `https://covid-api.mmediagroup.fr/v1/vaccines?country=Lithuania`
          ),
          fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=Latvia`),
          fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=Estonia`),
        ]);

        // Can't use !response.ok, because 2nd API always returns response OK. Doesn't matter if there is a error or not, but response is OK
        // if (!response.ok) {
        //   //       throw new Error("Something went wrong!");
        //   //     }

        const data = await Promise.all(response.map((r) => r.json()));
        context.setDataFromAPi(data);
      } catch (error) {
        context.setError2(error.message);
      }
      context.setIsLoading(false);
    };
    fetchDataHandler();
    // eslint-disable-next-line
  }, []);
  return null;
  // <div className={classes.btnPlace}>
  //   <Button variant="outlined" value="Lithuania" onClick={fetchDataHandler}>
  //     Lithuania
  //   </Button>
  //   <Button variant="outlined" value="Latvia" onClick={fetchDataHandler}>
  //     Latvia
  //   </Button>
  //   <Button variant="outlined" value="Estonia" onClick={fetchDataHandler}>
  //     Estonia
  //   </Button>
  // </div>
};

export default APIData;
