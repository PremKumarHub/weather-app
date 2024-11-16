import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" for React 18
import App from "./App";
import "./styles/App.css";

// Create the root and render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
