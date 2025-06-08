import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { HomeRoute } from "./routes/home";
import { AboutRoute } from "./routes/about";
import TaskDetailRoute from "./routes/task-detail";

createRoot(document.getElementById("root")!).render(<App />);

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-100 p-4 text-sm">
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
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/tasks/:taskId" element={<TaskDetailRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
