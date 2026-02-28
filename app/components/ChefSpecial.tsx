import React from "react";
import Image from "next/image";
import Link from "next/link";

// static data
import { foodData } from "../data";

const ChefSpecial = () => {
  // default section style

  const style = {
    section: "pt-24 pb-40 px-14 max-xl:px-12 max-lg:px-10 max-md:px-5  ",
  };

  return (
    <section className={style.section}>
      <h1 className="text-center mb-5 text-black text-3xl  max-sm:2xl font-bold">
        Chef's Specials
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
  );
};

export default ChefSpecial;
