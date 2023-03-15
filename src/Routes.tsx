import { useRoutes } from "react-router-dom";
import Experience from "./pages/experience";

import Home from "./pages/home";
import Informations from "./pages/informations";
import Mapping from "./pages/mapping";
import NotFound from "./pages/notFound";
import Ticket from "./pages/ticket";

const RouteComponent = () => {
  return useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Home /> },
    { path: "/experience", element: <Experience /> },
    { path: "/mapping", element: <Mapping /> },
    { path: "/informations", element: <Informations /> },
    { path: "/ticket", element: <Ticket /> },
  ]);
};

export default RouteComponent;
