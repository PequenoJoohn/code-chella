import { useRoutes } from "react-router-dom";
import Home from "./pages/home";

const RouteComponent = () => {
  return useRoutes([
    { path: "*", element: "<p>404</p>" },
    { path: "/", element: <Home /> },
  ]);
};

export default RouteComponent;
