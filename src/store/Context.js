import React, { useState } from "react";

const Context = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
