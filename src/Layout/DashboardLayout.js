import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="service-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="service-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-1/2 md:w-80 text-base-content font-bold md:bg-none bg-base-200">
            <li>
              <Link to="/dashboard">My orders</Link>
            </li>
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add A product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProduct">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myBuyers">My buyers</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
