import React, { useState } from "react";

const Context = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
  dataFromAPI: {},
  setDataFromAPi: () => {},
  error: false,
  setError: () => {},
  initData: {},
  setInitData: () => {},
});

export const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataFromAPI, setDataFromAPi] = useState({});
  const [error, setError] = useState(null);
  const [initData, setInitData] = useState({});

  return (
    <Context.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        dataFromAPI: dataFromAPI,
        setDataFromAPi: setDataFromAPi,
        error: error,
        setError: setError,
        initData: initData,
        setInitData: setInitData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
