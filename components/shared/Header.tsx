"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <Card className="flex p-8 rounded-none justify-between items-center">
      <Sidebar />

      <h1 className="text-xl font-semibold">
        <strong className="text-purple-700">FSW</strong> Store
      </h1>

      <Button size="icon" variant={"outline"}>
        <ShoppingCart />
      </Button>
    </Card>
  );
};

export default Header;
