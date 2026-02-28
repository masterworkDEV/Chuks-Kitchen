"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/images/heroImage.png";

// Static food data
import { foodData } from "@/app/data";

const explore = () => {
  const [categories, setCategories] = useState([
    "Popular",
    "Jollof Rice & Entrees",
    " Swallow & Soups ",
    "Grills & sides",
    "Beverages",
    "Desserts",
  ]);

  return (
    <div className="min-h-screen ">
      <section className="mt-20  h-80 max-sm:mt-10 relative">
        {/* image layer background covering */}
        <div className="w-full h-full absolute right-0 left-0  bottom-0 bg-[#00000072] z-10"></div>

        <Image
          src={heroImage}
          className="h-full w-full object-cover"
          alt="A diverse group of friends laughing and connecting together"
          priority
        />

        <div className="absolute right-0 left-0 top-[50%] translate-y-[-50%] z-10 ml-10">
          <h1 className="text-6xl  max-lg:text-5xl max-sm:text-4xl text-white capitalize mb-6 font-bold">
            {" "}
            Chuks Kitchen
          </h1>

          <p className="font-paragraph capitalize text-white mb-10 text-xl max-md:text-[1rem] tracking-normal leading-7 ">
            chuks kitchen nigerian home cooking 4.8 (1.2k)
          </p>
        </div>
      </section>

      <main className="mt-10 px-14 max-lg:px-10 max-md:px-7 max-sm:px-5">
        <section className="bg-white rounded-md p-6 max-sm:p-4">
          <h2 className="text-xl  mb-5 font-semibold">Menu Categories</h2>

          <ul>
            {categories.length ? (
              categories.map((category) => (
                <li
                  // Since we are not filtering. We do it in a temporary way
                  className={`text-xl max-sm:text-[1rem]  mb-3 max-sm:mb-2 ${
                    category.includes("Popular")
                      ? " bg-[#ff781877] border-l-5 border-orange"
                      : ""
                  } p-2 hover:bg-[#ff781877] transition-all`}
                  key={category}
                >
                  {category}
                </li>
              ))
            ) : (
              <p>No Featured Category</p>
            )}
          </ul>
        </section>
        {/* Popular  */}
        <section className="py-14">
          <h1 className=" mb-5 text-black text-3xl  max-sm:2xl font-bold">
            Popular
          </h1>
          {/* Cards */}
          <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-10 max-sm:grid-cols-1 ">
            {foodData.length ? (
              foodData
                .map((food) => (
                  <div
                    className="border-2 border-white  bg-white  rounded-2xl h-96"
                    key={food.name}
                  >
                    <Link
                      href={`/meals/${food.id}`}
                      className="block h-2/4 rounded-t-2xl mb-3"
                    >
                      <Image
                        src={food.image}
                        alt={food.name}
                        className=" rounded-t-2xl h-full w-full"
                      />
                    </Link>
                    <div className="card-bottom px-4 my-3">
                      <h3 className="mb-2 text-text text-xl font-semibold">
                        {food.name}
                      </h3>
                      <p className="mb-6 text-text ">
                        {food.description.length < 70
                          ? food.description
                          : food.description.slice(0, 70).concat("...")}
                      </p>
                      <div className="flex justify-between">
                        <h3 className="text-text  font-semibold text-orange ">
                          ₦{food.price.toLocaleString()}
                        </h3>
                        <button className=" bg-orange px-6 py-3 rounded-lg text-white text-sm font-semibold">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
                .slice(0, 6)
            ) : (
              <p>Sorry No Food In Stock yet</p>
            )}
          </div>
        </section>

        {/* Rice  */}
        <section className="py-14">
          <h1 className=" mb-5 text-black text-3xl  max-sm:2xl font-bold">
            Jollof Rice & Entrees
          </h1>
          {/* Cards */}
          <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-10 max-sm:grid-cols-1 ">
            {foodData
              .filter((food) =>
                food.title.toLowerCase().includes("jollof delights")
              )
              .map((food) => (
                <div
                  className="border-2 border-white  bg-white  rounded-2xl h-96"
                  key={food.name}
                >
                  <Link
                    href={`/meals/${food.id}`}
                    className="block h-2/4 rounded-t-2xl mb-3"
                  >
                    <Image
                      src={food.image}
                      alt={food.name}
                      className=" rounded-t-2xl h-full w-full"
                    />
                  </Link>
                  <div className="card-bottom px-4 my-3">
                    <h3 className="mb-2 text-text text-xl font-semibold">
                      {food.name}
                    </h3>
                    <p className="mb-6 text-text ">
                      {food.description.length < 70
                        ? food.description
                        : food.description.slice(0, 70).concat("...")}
                    </p>
                    <div className="flex justify-between">
                      <h3 className="text-text  font-semibold text-orange ">
                        ₦{food.price.toLocaleString()}
                      </h3>
                      <button className=" bg-orange px-6 py-3 rounded-lg text-white text-sm font-semibold">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 6)}
          </div>
        </section>
        <section className="py-14">
          <h1 className=" mb-5 text-black text-3xl  max-sm:2xl font-bold">
            Swallow & Soups
          </h1>
          {/* Cards */}
          <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-10 max-sm:grid-cols-1 ">
            {foodData
              .filter((food) =>
                food.title.toLowerCase().includes("swallow & soups")
              )
              .map((food) => (
                <div
                  className="border-2 border-white  bg-white  rounded-2xl h-96"
                  key={food.id}
                >
                  <Link
                    href={`/meals/${food.id}`}
                    className="block h-2/4 rounded-t-2xl mb-3"
                  >
                    <Image
                      src={food.image}
                      alt={food.name}
                      className=" rounded-t-2xl h-full w-full"
                    />
                  </Link>
                  <div className="card-bottom px-4 my-3">
                    <h3 className="mb-2 text-text text-xl font-semibold">
                      {food.name}
                    </h3>
                    <p className="mb-6 text-text ">
                      {food.description.length < 70
                        ? food.description
                        : food.description.slice(0, 70).concat("...")}
                    </p>
                    <div className="flex justify-between">
                      <h3 className="text-text  font-semibold text-orange ">
                        ₦{food.price.toLocaleString()}
                      </h3>
                      <button className=" bg-orange px-6 py-3 rounded-lg text-white text-sm font-semibold">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 6)}
          </div>
        </section>
      </main>
    </div>
  );
};

export default explore;
