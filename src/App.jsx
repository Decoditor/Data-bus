import React from "react";
import { Button } from "./components/ui/button";
import Dashboard from "@/pages/dashboard/Dashboard";
import Header from "@/components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
