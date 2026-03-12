import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  image: StaticImageData | any;
  name: string;
  title: string;
  description: string;
  price: number;
}

const MealCard: NextPage<Props> = ({
  id,
  image,
  name,
  price,
  description,
  title,
}) => {
  return (
    <div
      className="border-2 border-white  bg-white  rounded-2xl h-96 shadow-sm"
      key={id}
    >
      <Link href={`/meals/${id}`} className="block h-2/4 rounded-t-2xl mb-3">
        <Image
          src={image}
          alt={name}
          className=" rounded-t-2xl h-full w-full"
        />
      </Link>
      <div className="card-bottom px-4 my-3">
        <h3 className="mb-2 text-text text-xl font-semibold">{name}</h3>
        <p className="mb-6 text-text ">
          {description.length < 70
            ? description
            : description.slice(0, 70).concat("...")}
        </p>
        <div className="flex justify-between">
          <h3 className="text-text  font-semibold text-orange ">
            ₦{price.toLocaleString()}
          </h3>
          <button className=" bg-orange px-6 py-3 rounded-lg text-white text-sm font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
