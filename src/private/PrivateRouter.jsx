import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { RoutesWithNotFound } from "../components/RoutesWithNotFound/RoutesWithNotFound";
import OLTsList from "./";
import React from "react";

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/home" element={<OLTsList />} />
      <Route path="/about" element={<Dashboard />} />
      <Route path="/user" element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};
