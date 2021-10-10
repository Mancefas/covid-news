import React, { useState } from "react";

const Context = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
  dataFromAPI: {},
  setDataFromAPi: () => {},
});

export const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataFromAPI, setDataFromAPi] = useState({});

  return (
    <Context.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        dataFromAPI: dataFromAPI,
        setDataFromAPi: setDataFromAPi,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
