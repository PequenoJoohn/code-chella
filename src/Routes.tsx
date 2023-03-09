import { useRoutes } from "react-router-dom";
import Experience from "./pages/experience";

import Home from "./pages/home";
import NotFound from "./pages/notFound";

const RouteComponent = () => {
  return useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Home /> },
    { path: "/experience", element: <Experience /> },
  ]);
};

export default RouteComponent;
