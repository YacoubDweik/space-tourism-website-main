import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Destination.css";
import "./styles/Crew.css";
import "./styles/Technology.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
