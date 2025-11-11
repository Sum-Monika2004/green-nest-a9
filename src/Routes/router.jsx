import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";

import Root from "../Pages/Root/Root";
import Plants from "../Pages/Plants/Plants";
import Profile from "../Pages/Profile/Profile";
import PlantDetails from "../Pages/PlantDetails/PlantDetails";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/plants.json"),
        path: "/",
      },
      {
        path: "/plants",
        loader: () => fetch("/plants.json"),
        Component: Plants,
      },
      {
        path: "/profile",
        loader: () => fetch("/plants.json"),
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/plantDetails/:id",
        loader: () => fetch("/plants.json"),
        Component: PlantDetails,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
