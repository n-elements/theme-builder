import state from "@state";
import React, { ComponentType } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

export default function withApplicationInit<T>(
  Component: ComponentType<T>
): ComponentType<T> {
  return (props) => {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={state.store}>
             
            <PersistGate loading={null} persistor={state.persistor}>
              <Component {...props} />
            </PersistGate>
          </Provider>
           
        </BrowserRouter>
      </React.StrictMode>
    );
  };
}
