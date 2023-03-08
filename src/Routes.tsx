import { useRoutes } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/notFound";

const RouteComponent = () => {
  return useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Home /> },
  ]);
};

export default RouteComponent;
