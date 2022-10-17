import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// imported stylesheet
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* app component */}
    <App />
  </React.StrictMode>
);
