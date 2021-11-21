import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import CryptoJS from "crypto-js";

const saveToLocalStorage = (state) => {
  console.log(state.authUser);
  const serializedUid = CryptoJS.AES.encrypt(
    JSON.stringify(state.authUser),
    "my-secret-key"
  ).toString();
  console.log(serializedUid);
  localStorage.setItem("auth", serializedUid);
};

const checkLocalStorage = () => {
  const serializedUid = localStorage.getItem("auth");
  if (serializedUid === null) return undefined;
  return {
    authUser: JSON.parse(
      CryptoJS.AES.decrypt(serializedUid, "my-secret-key").toString(
        CryptoJS.enc.Utf8
      )
    ),
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  rootReducer,
  checkLocalStorage(),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
