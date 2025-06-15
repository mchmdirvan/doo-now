import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Index } from "./pages";
// import { RhfPlayground } from "./pages/rhf-playground";
import { ShadcnFormPlayground } from "./pages/shadcn-form-playground";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Index /> */}
    {/* <RhfPlayground /> */}
    <ShadcnFormPlayground />
  </StrictMode>,
);
