import { createBrowserRouter } from "react-router-dom";
//pages
import App from "@/App";
import Login from "@/page/login";
import NotFound from "@/page/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
