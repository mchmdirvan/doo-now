import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import Router from "./routes/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
