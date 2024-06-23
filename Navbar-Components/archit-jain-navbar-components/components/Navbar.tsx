import React from "react";

import Input from "@/components/Input";
import NavItem from "./NavItem";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
const NavBar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-md">
      <div className="flex items-center max-w-6xl justify-between mx-auto px-3 h-14">
        {/* logo div */}
        <div className="flex gap-2 justify-center items-center">
          <h1>GrapplTech</h1>
          <div className="md:block hidden">
            <Input></Input>
          </div>
        </div>
        {/* NavItem */}
        <div className="flex gap-8 items-center">
          <div className="md:block hidden">
            <NavItem></NavItem>
          </div>
          <div>
            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>
            <SignedOut>
              <Button className="rounded-full" variant={"secondary"}>
                <SignInButton></SignInButton>
              </Button>
            </SignedOut>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
