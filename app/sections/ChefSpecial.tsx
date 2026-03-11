import React from "react";
import Image from "next/image";
import Link from "next/link";

// static data
import { foodData } from "../data";
import MealCard from "../(marketing)/meals/components/MealCard";

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
              <MealCard
                id={food.id}
                image={food.image}
                name={food.name}
                description={food.description}
                price={food.price}
              />
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
