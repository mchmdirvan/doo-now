import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutRoute } from "./routes/about";
import { HomeRoute } from "./routes/home";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeRoute />}></Route>
      <Route path="/about" element={<AboutRoute />} />
    </Routes>
  </BrowserRouter>
);
