import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/sidebar";
import Image from "next/image";
import { SignOutButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

const Sidebar = () => {
  const user = useUser();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant={"outline"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="space-y-6">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>

        <SignedIn>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>
                {user.isSignedIn ? user.user.username?.toUpperCase() : ""}
              </AvatarFallback>

              <AvatarImage
                src={
                  user.user?.imageUrl
                    ? user.user.imageUrl
                    : "/assets/pictures/user.jpg"
                }
              />
            </Avatar>

            <div className="flex flex-col">
              <p>{`${user.user?.firstName} ${user.user?.lastName}`}</p>
              <small className="text-xs text-zinc-500">Happy shopping!</small>
            </div>
          </div>
        </SignedIn>

        <Separator />

        <div className="mt-2 space-y-4">
          {sidebarLinks.map((link) => (
            <Button
              className="w-full justify-start gap-2"
              variant={"outline"}
              key={link.label}
            >
              <Image width={20} height={20} alt={link.label} src={link.icon} />
              {link.label}
            </Button>
          ))}

          <SignedIn>
            <SignOutButton>
              <Button
                className="w-full justify-start gap-2 mt-4"
                variant={"outline"}
              >
                <Image
                  width={20}
                  height={20}
                  alt={"Sign In"}
                  src={"/assets/icons/sign-out.svg"}
                />
                Sign Out
              </Button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <Link href={"/sign-in"}>
              <Button
                className="w-full justify-start gap-2 mt-4"
                variant={"outline"}
              >
                <Image
                  width={20}
                  height={20}
                  alt={"Sign In"}
                  src={"/assets/icons/log-in.svg"}
                />
                Log In
              </Button>
            </Link>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
