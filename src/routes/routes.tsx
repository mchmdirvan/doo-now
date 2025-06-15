import { createBrowserRouter, RouterProvider } from "react-router";
import { Index } from "@/pages";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "*",
      element: <p>404</p>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
