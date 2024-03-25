"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = ["/users/man.jpg", "/users/woman.jpg", "/users/kid.jpg"];
  return (
    <Carousel plugins={[plugin.current]} className="">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent
                  className="flex flex-col justify-end items-start mt-5 mx-3 rounded-md h-[600px] p-6 bg-cover"
                  style={{ backgroundImage: `url('${image}')` }}
                >
                  <h1 className="text-6xl mb-1 font-bold text-white">
                    VogueNest Latest Collection
                  </h1>
                  <h6 className="text-xl text-white font-medium mb-5">
                    Find out the modern trend collection. Offering the best
                    quality.
                  </h6>
                  <Button>
                    Shop Now <CiShoppingCart size={25} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
