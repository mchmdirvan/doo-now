import { createBrowserRouter, RouterProvider } from "react-router";

import { Introduction } from "@/pages/introduction";
import { Index } from "@/pages";
import { TaskDetail } from "@/pages/task-detail";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/tasks/:id",
      element: <TaskDetail />,
    },
    {
      path: "/introduction",
      element: <Introduction />,
    },
    {
      path: "*",
      element: <p>404</p>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
