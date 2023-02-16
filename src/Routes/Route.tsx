import { useRoutes } from "react-router-dom";
import Main from "../pages/Main";

export const Route = () => {
  return useRoutes([{ path: "/", element: <Main/> }]);
};
