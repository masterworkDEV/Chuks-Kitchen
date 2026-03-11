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
      className="min-h-screen w-full flex gap-10
           pr-14 max-lg:pr-10 max-md:pr-7  max-sm:gap-0
           max-sm:flex-col max-sm:pr-0 "
    >
      <section className="mt-20 max-sm:mt-10 h-screen w-full pb-4 max-sm:pb-0 max-sm:h-2/4">
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
        <p className="my-5 text-text font-normal">{meal.description}</p>

        {/* food type  */}
        <div className=" flex justify-between items-center">
          <small>Mid spicy</small>
          <small>Vegetarian option available</small>
          <a className="text-blue-500 text-sm" href="/">
            View Allegies
          </a>
        </div>
        {/* Pick your food type  */}

        <div className="my-7">
          <h2 className="text-xl text-black mb-4">Choose Your Protein</h2>
          <div>
            <div className="border-2 border-gray-200 rounded-md  p-2 flex items-center gap-2 mb-5">
              {/* icon */}
              <div className="border-4 border-orange w-6 h-6 rounded-full"></div>
              <p>Chicken</p>
            </div>
            <div className="border-2 border-gray-200 rounded-md  p-2 flex items-center gap-2">
              {/* icon */}
              <div className="border-4 border-orange w-6 h-6 rounded-full"></div>
              <p>Beef</p>
            </div>
          </div>
        </div>

        {/* Extra sides (optional)  */}

        <div className="my-7">
          <h2 className="text-xl text-black mb-4">Extra Sides (Optional)</h2>
          <div>
            <div className="border-2 border-gray-200 rounded-md  p-2 flex items-center gap-2 mb-5">
              {/* icon */}
              <div className="border-2 border-gray-200 w-6 h-6 rounded-lg"></div>
              <p>Fried Plantain</p>
            </div>
            <div className="border-2 border-gray-200 rounded-md  p-2 flex items-center gap-2">
              {/* icon */}
              <div className="border-2 border-gray-200 w-6 h-6 rounded-lg"></div>
              <p>Coleslaw</p>
            </div>
          </div>
        </div>

        {/* Extra sides (optional)  */}

        <div className="mt-7 mb-2">
          <h2 className="text-xl text-black mb-4">Extra Sides (Optional)</h2>
          <div>
            <textarea
              rows={4}
              name="message"
              className="p-2 border-2 border-gray-200 w-full rounded"
              placeholder="Add your message"
            ></textarea>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MealDetails;
