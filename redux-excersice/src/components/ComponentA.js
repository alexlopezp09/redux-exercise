import React, { useReducer } from "react";
import ComponentB from "./ComponentB";
import reducer from "../reducer";
import { StateContext, DispatchContext, initialState } from "../constants";
import "./styles.css";

export default function ComponentA() {
  //lets use useReducer to get a state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  // onBlur event handler

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <h1>useReducer and useContext Demo</h1>
          <ComponentB />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
