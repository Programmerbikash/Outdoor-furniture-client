import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AvailableService from "../../Pages/Dashboard/AvailableService/AvailableService";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import ProductCategory from "../../Pages/Home/ProductCategories/ProductCategory";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/allProduct/:id",
          element: <PrivateRoute><ProductCategory></ProductCategory></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allProduct/${params.id}`)
        },
      ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/availableService/:id',
                element: <AvailableService></AvailableService>
            },
        ]
    }
]);