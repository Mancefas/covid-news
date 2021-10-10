import React, { useState } from "react";

const Context = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
  dataFromAPI: {},
  setDataFromAPi: () => {},
  error: false,
  setError: () => {},
});

export const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataFromAPI, setDataFromAPi] = useState({});
  const [error, setError] = useState(null);

  return (
    <Context.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        dataFromAPI: dataFromAPI,
        setDataFromAPi: setDataFromAPi,
        error: error,
        setError: setError,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
