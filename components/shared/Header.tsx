import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Home,
  ListOrdered,
  LogInIcon,
  MenuIcon,
  Percent,
  ShoppingCart,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/sidebar";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="flex p-8 rounded-none justify-between items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 space-y-4">
            {sidebarLinks.map((link) => (
              <Button
                className="w-full justify-start gap-2"
                variant={"outline"}
                key={link.label}
              >
                <Image
                  width={20}
                  height={20}
                  alt={link.label}
                  src={link.icon}
                />
                {link.label}
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

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
