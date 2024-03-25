import Image from "next/image";
import UserNavBar from "./users/components/navbar";
import HomeCarousel from "./users/components/homeCarousel";
import ProductCard from "./users/components/productCard";
import { Button } from "@/components/ui/button";
import Footer from "./users/components/footer";

export default function Home() {
  const products = [
    {
      title: "Plain White Tshirt",
      img: "/users/collections/tshirt.jpg",
      price: 10.99,
      ratings: 4.4,
      ratings_num: 250,
    },
    {
      title: "Plain Trouser For Men",
      img: "/users/collections/pant.jpg",
      price: 100.99,
      ratings: 4.6,
      ratings_num: 250,
    },
    {
      title: "Plain Trouser For Men",
      img: "/users/collections/gogles.jpg",
      price: 50.99,
      ratings: 4.7,
      ratings_num: 250,
    },
    {
      title: "Plain White Tshirt",
      img: "/users/collections/tshirt.jpg",
      price: 10.99,
      ratings: 4.4,
      ratings_num: 250,
    },
    {
      title: "Plain Trouser For Men",
      img: "/users/collections/pant.jpg",
      price: 100.99,
      ratings: 4.6,
      ratings_num: 250,
    },
    {
      title: "Plain Trouser For Men",
      img: "/users/collections/gogles.jpg",
      price: 50.99,
      ratings: 4.7,
      ratings_num: 250,
    },
  ];
  return (
    <>
      <UserNavBar />
      <HomeCarousel />
      <div className="collections mt-20">
        <h1 className="text-5xl text-center font-extrabold">New Collection</h1>
        <div className="products flex flex-row flex-wrap justify-around mt-5 mx-20">
          {products.map((product, key) => (
            <div key={key}>
              <ProductCard
                prod_img={product.img}
                prod_num_ratings={product.ratings_num}
                prod_price={product.price}
                prod_ratings={product.ratings}
                prod_title={product.title}
                prod_url=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="categories my-20">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Explore Our Various Categories
        </h1>
        <div className="images flex flex-row justify-around">
          <div className="py-5 px-7 bg-[url('/users/categories/man.jpg')] flex justify-end flex-col items-start rounded-xl h-[500px] w-[450px] bg-cover">
            <h1 className="text-white text-left font-extrabold text-7xl">
              MAN
            </h1>
            <Button className="bg-white px-10 text-black rounded-2xl">
              Explore Now
            </Button>
          </div>
          <div className="py-5 px-7 bg-[url('/users/categories/women.jpg')] flex justify-end flex-col items-start rounded-xl h-[500px] w-[450px] bg-cover">
            <h1 className="text-white text-left font-extrabold text-7xl">
              WOMEN
            </h1>
            <Button className="bg-white px-10 text-black rounded-2xl">
              Explore Now
            </Button>
          </div>
          <div className="py-5 px-7 bg-[url('/users/categories/kid.jpg')] flex justify-end flex-col items-start rounded-xl h-[500px] w-[450px] bg-cover">
            <h1 className="text-white text-left font-extrabold text-7xl">
              KID
            </h1>
            <Button className="bg-white px-10 text-black rounded-2xl">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
