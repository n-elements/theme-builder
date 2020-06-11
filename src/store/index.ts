import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";
import version from "../version";

const persistConfig = {
  key: makestoragekey("ne.redux.state", version),
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export type ApplicationState = ReturnType<typeof store["getState"]>;

export default { persistor, store };

function makestoragekey(key: string, version: any): string {
  return [window.location.host, key, "v", version].join("/");
}
