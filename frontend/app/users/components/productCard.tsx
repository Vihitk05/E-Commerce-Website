import { Button } from "@/components/ui/button";
import React from "react";
import RatingStars from "./ratings";

interface ProductCardInfo {
 prod_url : string,
 prod_title: string,
 prod_price: number,
 prod_ratings: number,
 prod_num_ratings: number,
 prod_img:string,
}

const ProductCard: React.FC<ProductCardInfo> = ({prod_img,prod_num_ratings,prod_price,prod_ratings,prod_title}) => {
  return (
    <div className="rounded-lg my-5">
      <div className="rounded-t-lg">
        <img
          src={prod_img}
          alt=""
          className="rounded-t-lg h-[300px] w-[350px]"
        />
      </div>
      <div className="pt-3 pb-4 px-3.5 bg-[#EEEEEE] rounded-b-lg">
        <h3 className="text-xl font-bold">{prod_title}</h3>
        <div className="flex flex-row justify-between items-center">
          <RatingStars rating={prod_ratings} />
          <h4 className="text-medium text-yellow-500 underline hover:cursor-pointer font-medium">
            {prod_num_ratings}+ Ratings
          </h4>
        </div>
        <div className="flex mt-2 items-center flex-row justify-between">
          <h3 className="text-xl font-bold">${prod_price}</h3>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
