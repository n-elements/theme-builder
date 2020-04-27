import state from "@state";
import React, { ComponentType } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from "react-intl";
import useMessagesLoading from "@hooks/useMessagesLoading";

export default function withApplicationInit<T>(
  Component: ComponentType<T>
): ComponentType<T> {
  return (props) => {
    const locale = navigator.language.split("-")[0];
    const messages = useMessagesLoading(locale);

    if (messages.loading) {
      return null;
    }

    return (
      <React.StrictMode>
        <IntlProvider locale={locale} messages={messages.messages}>
          <BrowserRouter>
            <Provider store={state.store}>
              <PersistGate loading={null} persistor={state.persistor}>
                <Component {...props} />
              </PersistGate>
            </Provider>
          </BrowserRouter>
        </IntlProvider>
      </React.StrictMode>
    );
  };
}
