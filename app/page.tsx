import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ChefSpecial from "./components/ChefSpecial";
import NewMenu from "./components/NewMenu";

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
