import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n/configs";
import { Provider } from "react-redux";
import rootStore from "./redux/stroe";
import { PersistGate } from "redux-persist/integration/react";

import axios from "axios";

axios.defaults.headers["x-icode"] = "E3FFF54D7FB00C9D";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
