import React, { useContext, useState, useEffect, createContext } from "react";

const GlobalContext = createContext({});
// useState();
const BASE_URL = "http://localhost:3001";

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    calculatorInteractions: 0,
    todoInteractions: 0,
    globalInteractions: {
        "portfolio": 0,
        "calculator": 0,
        "to-do":0,
    },
  });

  function incrementInteraction(projectName) {
    fetch(BASE_URL + "/project-interaction", {
      method: "POST",
      body: JSON.stringify({
        project: projectName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {});
  }

  function fetchAllInteractions() {
    fetch(BASE_URL + "/project-interaction")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        let globalInteractions = {};
        if (resp.data) {
          resp.data.forEach((d) => {
            globalInteractions[d.project] = d.interactions;
          });
          updateGlobalState("globalInteractions", globalInteractions);
        }
      })
      .catch((err) => {
        alert("An error occurred", err);
      });
  }
  useEffect(() => {
    incrementInteraction("portfolio");
    fetchAllInteractions();
  }, []);

  function updateGlobalState(key, value) {
    let tempState = { ...globalState };
    tempState[key] = value;
    setGlobalState(tempState);
  }

  return (
    <GlobalContext.Provider
      value={{ globalState, updateGlobalState, incrementInteraction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used within an GlobalProvider");
  }

  return context;
}

export { GlobalProvider, GlobalContext, useGlobal };
