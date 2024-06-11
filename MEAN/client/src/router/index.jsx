import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgetpassowrd from "../pages/Forgetpassowrd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "Forget-password",
        element: <Forgetpassowrd />,
      },
    ],
  },
]);

export default router;
