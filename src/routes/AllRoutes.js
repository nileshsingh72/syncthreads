import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default AllRoutes;
