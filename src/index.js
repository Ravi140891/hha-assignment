import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LevelContext } from "./context/LevelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LevelContext>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </LevelContext>
);

reportWebVitals();
