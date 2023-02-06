import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n/configs";
import { Provider } from "react-redux";
import store from "./redux/stroe";

import axios from "axios";

axios.defaults.headers["x-icode"] = "0599B41A68AC9071";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
