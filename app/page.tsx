import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import ChefSpecial from "./sections/ChefSpecial";
import NewMenu from "./sections/NewMenu";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <ChefSpecial />
      <NewMenu />
    </main>
  );
}
