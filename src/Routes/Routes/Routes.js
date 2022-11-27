import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AdminInfo/AllUsers/AllUsers";
import BuyerProduct from "../../Pages/Dashboard/BuyerProduct/BuyerProduct";
import MyBuyers from "../../Pages/Dashboard/SellerInfo/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerInfo/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import ProductCategory from "../../Pages/Home/ProductCategories/ProductCategory";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <BuyerProduct></BuyerProduct>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
]);