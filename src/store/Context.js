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
  isLoadingInit: false,
  setIsLoadingInit: () => {},
  dataFromAPI2: [],
  setDataFromAPI2: () => {},
});

export const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInit, setIsLoadingInit] = useState(false);
  const [dataFromAPI, setDataFromAPi] = useState({});
  const [error, setError] = useState(null);
  const [initData, setInitData] = useState({});
  const [dataFromAPI2, setDataFromAPI2] = useState([]);

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
        isLoadingInit: isLoadingInit,
        setIsLoadingInit: setIsLoadingInit,
        dataFromAPI2: dataFromAPI2,
        setDataFromAPI2: setDataFromAPI2,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
