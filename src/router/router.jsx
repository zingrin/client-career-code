import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
const router = createBrowserRouter([
  {
    path: "/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
             path:'/signIn',
             Component:SignIn
            }
        ]
  },
]);

export default router;