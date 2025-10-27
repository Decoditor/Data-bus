import React from "react";
import Header from "../../components/Header";
import History from "./History";
import { Eye, Plus, ShieldCheckIcon, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import AgentAds from "./AgentAds";

function Dashboard() {
  const actions = [
    { name: "Airtime Purchase", imgs: [] },
    { name: "Data Purchase", imgs: [] },
    { name: "e-Pin Purchase", imgs: [] },
    { name: "Electricity Payment", imgs: [] },
    {
      name: "CableTV",
      imgs: [],
    },
    {
      name: "Fund Bet",
      imgs: [],
    },
  ];

  return (
    <div className="w-full px-8 my-12 h-full">
      <div className="max-w-[1100px] w-full mx-auto grid grid-cols-5 gap-8">
        <div className="col-span-3 grid h-fit gap-8">
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

          <div className="grid grid-cols-2 gap-8 w-full">
            {actions.map((item) => (
              <Card
                key={item.name}
                className="h-36 cursor-pointer hover:scale-105 transition-all duration-400"
              >
                <CardContent className="flex flex-col justify-between h-full">
                  <p className="text-xl text-primary font-semibold">
                    {item.name}
                  </p>

                  <div className=" flex items-center scale-105">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div
                        key={i}
                        className="flex -ml-2 first:ml-0 items-center justify-center bg-blue-200 rounded-full w-8 h-8"
                      >
                        <User />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="col-span-2 h-full">
          <History />
        </div>
        <div className="grid col-span-5">
          <AgentAds />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
