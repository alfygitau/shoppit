import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "rsuite/dist/rsuite.min.css";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import { store } from "../src/Redux/Store/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
        <ToastContainer />
        <Toaster/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
