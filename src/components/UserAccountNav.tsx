"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button, buttonVariants } from "./ui/button";

const UserAccountNav = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      className={buttonVariants({ variant: "destructive" })}
    >
      Sign out
    </Button>
  );
};

export default UserAccountNav;
