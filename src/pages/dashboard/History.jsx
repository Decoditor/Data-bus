import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { history } from "../../../data";
import { User } from "lucide-react";
import { Button } from "../../components/ui/button";

function History() {
  return (
    <div className="h-fit grid gap-5">
      <h2 className="text-3xl font-semibold text-primary">
        Transaction History
      </h2>

      <Card className="p-4! h-full">
        <CardHeader className="p-0! text-lg font-semibold">
          Today, 27 October
        </CardHeader>

        <CardContent className="p-0!">
          <div className="grid gap-4">
            {history.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 flex items-center justify-center rounded-2xl w-12 h-12">
                    <User className="w-6 h-fit" />
                  </div>

                  <div className="grid">
                    <p className="font-semibold"> {item.name} </p>
                    <p className="text-black/40 text-sm"> {item.service} </p>
                  </div>
                </div>

                <div className="grid text-right">
                  <p
                    className={`font-semibold ${
                      item.service == "Deposit" ? "text-green-500" : "black"
                    }`}
                  >
                    {item.service == "Deposit" ? "+" : "-"} &#8358;{" "}
                    {item.amount}{" "}
                  </p>

                  <p className="text-xs text-black/40">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-0">
          <Button className="w-full" size="lg">
            All Transactions
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default History;
