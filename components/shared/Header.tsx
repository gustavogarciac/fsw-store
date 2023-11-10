"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";

import Link from "next/link";
import Sidebar from "./Sidebar";
import Cart from "./Cart";

const Header = () => {
  return (
    <Card className="flex p-8 rounded-none justify-between items-center">
      <Sidebar />

      <Link href="/">
        <h1 className="text-xl font-semibold">
          <strong className="text-purple-700">Pixel</strong> Perch
        </h1>
      </Link>

      <Cart />
    </Card>
  );
};

export default Header;
