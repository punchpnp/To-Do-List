import React from "react";
import ReactDOM from "react-dom/client";

// all component
import App from "./App.jsx";

// change  body in website
import "./App.css";

// important for render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
