import React from "react";
import { Button } from "@/components/ui/button";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import LoginRegisterAuth from "./loginRegisterAuth";
// shadow-[0px_4px_2px_0px_gray]
const UserNavBar = () => {
  return (
    <>
      <div className="flex justify-between px-10 pt-2 items-center">
        <div className="Part1 flex flex-row">
          <Button variant="ghost">Men</Button>
          <Button variant="ghost">Women</Button>
          <Button variant="ghost">Kids</Button>
        </div>
        <div className="Part2">
          <h1 className="text-2xl font-extrabold">VogueNest</h1>
        </div>
        <div className="Part3 flex flex-row items-center space-x-3">
          <CiSearch size={25} />
          <CiShoppingCart size={25} />
          <LoginRegisterAuth />
        </div>
      </div>
    </>
  );
};

export default UserNavBar;
