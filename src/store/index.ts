import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";
import version from "../version";

const storagekey = "ne.redux.state";
const persistConfig = {
  key: makestoragekey(storagekey, version),
  storage,
};

cleanoldversions();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export type ApplicationState = ReturnType<typeof store["getState"]>;

export default { persistor, store };

function cleanoldversions() {
  const keytokeep = "persist:" + makestoragekey(storagekey, version);
  const keystoremove = getstoredversions().filter((a) => a !== keytokeep);
  keystoremove.forEach((a) => localStorage.removeItem(a));
}

function getstoredversions() {
  return Object.keys(localStorage).filter((a) =>
    a.includes(makestoragekeybase(storagekey))
  );
}

function makestoragekeybase(key: string): string {
  return [window.location.host, key].join("/");
}

function makestoragekey(key: string, version: any): string {
  return [makestoragekeybase(key), "v", version].join("/");
}
