import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { Button } from "@/components/ui/button";
import { CircleAlert, CircleAlertIcon } from "lucide-react";
import App from "next/app";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  2xl:grid-cols-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <TodoList />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Latest Transactions" />
      </div>
    </div>
  );
}
