import Image from "next/image";
import { foodData } from "@/app/data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ mealId: string }>;
};

// This function generates the dynamic title and description
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mealId } = await params;
  const meal = foodData.find((m: Meal) => m.id === Number(mealId));

  // Default metadata if meal isn't found
  if (!meal) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${meal.name} | Chuks Kitchen`,
    description: meal.description,
    openGraph: {
      images: [meal.image.src],
    },
  };
}

const MealDetails = async ({ params }: Props) => {
  const { mealId } = await params;

  // 1. Find the meal.
  const meal = foodData.find((m: Meal) => m.id.toString() === mealId);

  // 2. Handle the "Not Found" case early (Guard Clause)
  if (!meal) {
    return (
      <main className="mt-24 min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">
          Sorry, No Product Found At This Time
        </p>
      </main>
    );
  }

  return (
    <main
      className="h-screen w-full flex gap-10
           pr-14 max-lg:pr-10 max-md:pr-7  max-sm:gap-0
           max-sm:flex-col max-sm:pr-0 "
    >
      <section className="h-full w-full pb-4 max-sm:pb-0 max-sm:h-2/4">
        <Image
          src={meal.image}
          alt={meal.name}
          className="h-full w-full rounded object-cover"
        />
      </section>

      <section
        className="w-full mt-24 mb-4 bg-white rounded shadow-sm pt-10 px-4  max-sm:pt-7 max-sm:mt-0
      "
      >
        <h1 className="text-2xl font-bold max-sm:text-xl mb-3">{meal.name}</h1>
        <h2 className="text-xl text-orange font-semibold">
          ₦{meal.price.toLocaleString()}
        </h2>
        <p className="mt-4 text-text font-normal">{meal.description}</p>
      </section>
    </main>
  );
};

export default MealDetails;
