import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { AboutRoute } from "./routes/about";
import { HomeRoute } from "./routes/home";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <nav className="bg-red-100 p-4 text-sm">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomeRoute />}></Route>
      <Route path="/about" element={<AboutRoute />} />
    </Routes>
  </BrowserRouter>
);
