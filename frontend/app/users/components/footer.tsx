import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="px-10 pb-5 bg-black">
      <div className=" flex flex-row justify-between items-center">
        <div>
          <h1 className="text-6xl pt-5 text-white font-semibold">VOGUENEST</h1>
          <h6 className="mb-5 text-white">
            Get newsletter update for upcoming product and best discount for all
            items
          </h6>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Email"
              className="bg-white rounded-3xl"
            />
            <Button
              type="submit"
              className="bg-white text-black hover:bg-white rounded-3xl"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between space-x-5">
          <div>
            <h4 className="text-xl font-small text-white">Products</h4>
            <h6 className="text-small font-light text-white">Tshirt</h6>
            <h6 className="text-small font-light text-white">Pant</h6>
            <h6 className="text-small font-light text-white">Gogles</h6>
            <h6 className="text-small font-light text-white">Chains</h6>
          </div>
          <div>
            <h4 className="text-xl font-small text-white">Categories</h4>
            <h6 className="text-small font-light text-white">Man</h6>
            <h6 className="text-small font-light text-white">Women</h6>
            <h6 className="text-small font-light text-white">Kids</h6>
          </div>
          <div>
            <h4 className="text-xl font-small text-white">Follow us on</h4>
            <h6 className="text-small font-light text-white">Instagram</h6>
            <h6 className="text-small font-light text-white">Facebook</h6>
            <h6 className="text-small font-light text-white">Twitter</h6>
            <h6 className="text-small font-light text-white">YouTube</h6>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      <div>
        <h6 className="text-white text-center">&copy; 2024 VogueNest</h6>
      </div>
    </div>
  );
};

export default Footer;
