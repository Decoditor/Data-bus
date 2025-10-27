import React from "react";
import Header from "../../components/Header";
import History from "./History";
import { Eye, Plus, ShieldCheckIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

function Dashboard() {
  return (
    <div className="w-full px-8 my-12 h-full">
      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <div className="w-full h-40 grid gap-8 bg-blue-500 px-8 py-4 rounded-2xl">
            <div className="w-full h-fit flex justify-between">
              <p className="flex items-center text-gray-200 gap-2 text-lg">
                <span className="">
                  <ShieldCheckIcon className="w-8 fill-gray-200 stroke-blue-500" />
                </span>
                Available Balance
                <span className="">
                  <Eye className="w-4 h-fit cursor-pointer" />
                </span>
              </p>

              <Button className="bg-white text-primary font-semibold hover:bg-gray-200">
                <Plus /> Add Money
              </Button>
            </div>

            <div className="">
              <p className="text-gray-100 text-3xl">&#8358; {"100,000,000"}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 h-full">
          <History />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
