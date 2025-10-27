import React from "react";
import { Button } from "./components/ui/button";
import Dashboard from "@/pages/dashboard/Dashboard";
import Header from "@/components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 overflow-y-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
