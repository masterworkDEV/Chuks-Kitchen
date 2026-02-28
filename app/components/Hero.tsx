import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/images/heroImage.png";

const styles = {
  image: "w-full h-full  max-sm:object-cover ",
};

const Hero = () => {
  return (
    <section
      className="h-screen
  pt-20   max-sm:pt-0 relative"
    >
      {/* form to search meals */}
      <form className="absolute right-0 left-0 bottom-[-2%] px-40  max-xl:px-24 max-lg:px-20 max-md:px-12  max-sm:px-10 z-20 ">
        <div className="w-full">
          <input
            type="text"
            className=" w-full
        bg-white p-4  max-lg:p-3 max-sm:p-2.5 rounded-lg shadow"
            placeholder="What are you craving for today ?"
          />
        </div>
      </form>
      {/* image layer background covering */}
      <div className="w-full h-full absolute right-0 left-0 top-[-1%] bottom-0 bg-[#00000072] z-10"></div>

      <Image
        src={heroImage}
        className={styles.image}
        alt="A diverse group of friends laughing and connecting together"
        priority
      />

      <div
        className=" w-[60%] max-md:w-full
      absolute right-0 left-0 top-[50%] translate-y-[-50%] z-10 ml-10 max-md:ml-0 max-md:px-5
      "
      >
        <h1 className="text-6xl  max-lg:text-5xl max-sm:text-4xl text-white capitalize mb-6 font-extrabold">
          {" "}
          The Heart of Nigerian Home Cooking
        </h1>

        <p className=" text-white mb-10 text-xl max-md:text-[1rem] tracking-normal leading-7">
          Spend quality time with friends, family, and colleagues from different
          ethnicities and communities—all in one place.
        </p>

        <Link
          href="/"
          className="text-white bg-orange  px-10 py-6
            max-lg:px-8 max-lg:py-5  max-sm:px-6 max-sm:py-6 font-semibold rounded-2xl"
        >
          Discover what's new
        </Link>
      </div>
    </section>
  );
};

export default Hero;
