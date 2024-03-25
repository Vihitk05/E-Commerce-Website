import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="h-16 bg-[#EEEEEE]">
            <h1 className="font-extrabold text-2xl p-4 text-black">Home</h1>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Home;
