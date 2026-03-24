import { StaticImageData } from "next/image";

type Meal = {
  id: number;
  name: string;
  title: string;
  image: StaticImageData | any;
  description: string;
  price: number;
};
