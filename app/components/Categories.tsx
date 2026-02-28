"use client";

import Image from "next/image";
import Link from "next/link";

// static data
import { foodData } from "../data";

interface Props {}

const Categories = () => {
  // default section style
  const style = {
    section: "pt-24 pb-40 px-14 max-xl:px-12 max-lg:px-10 max-md:px-5",
  };

  return (
    <section className={style.section}>
      <h1 className="text-center mb-5 text-black text-3xl  max-sm:2xl font-bold">
        Popular Categories
      </h1>
      {/* Cards */}
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 items-center gap-10">
        {foodData.length ? (
          foodData
            .map((food) => (
              <div
                className="border-2 border-white  bg-white  rounded-2xl h-card-h"
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
                <div className="card-bottom  p-5">
                  <h3 className="text-center text-text font-semibold text-xl">
                    {food.name}
                  </h3>
                </div>
              </div>
            ))
            .slice(0, 6)
        ) : (
          <p>Sorry No Food In Stock</p>
        )}
      </div>
    </section>
  );
};

export default Categories;
