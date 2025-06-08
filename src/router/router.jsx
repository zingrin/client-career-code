import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";
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
              path:'/jobs/:id',
              Component:JobDetails,
              loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
              path:'/jobApply/:id',
              element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
              path:'/myApplications',
              element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
              path:'/addJob',
              element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
              path:'/myPostedJobs',
              element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
              path:'/applications/:job_id',
              element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            },
            {
                path:'/register',
                Component:Register
            },
            {
             path:'/signIn',
             Component:SignIn
            },

        ]
  },
]);

export default router;