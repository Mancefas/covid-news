import React, { useState } from "react";

const Context = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
  dataFromAPI: {},
  setDataFromAPi: () => {},
  error: false,
  setError: () => {},
  moreDataFromAPI: {},
  setMoreDataFromAPI: () => {},
});

export const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataFromAPI, setDataFromAPi] = useState({});
  const [moreDataFromAPI, setMoreDataFromAPI] = useState({});
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
        moreDataFromAPI: moreDataFromAPI,
        setMoreDataFromAPI: setMoreDataFromAPI,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
