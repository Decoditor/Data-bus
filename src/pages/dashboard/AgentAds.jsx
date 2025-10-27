import React from "react";
import { Button } from "../../components/ui/button";

function AgentAds() {
  return (
    <div className="bg-linear-to-br from-blue-900/90 to-blue-500/70 h-72 rounded-3xl p-8 grid grid-cols-2">
      <div className="text-gray-200 grid">
        <p className=" text-4xl font-bold">Want Cheaper Services?</p>
        <p className="text-xl text-gray-300">
          Get all services cheaper by becoming an agent, resell and make profit
          on all service we provide
        </p>

        <Button
          className="py-6 bg-black w-fit hover:bg-white hover:text-black"
          size="lg"
        >
          Become an Agent
        </Button>
      </div>
    </div>
  );
}

export default AgentAds;
