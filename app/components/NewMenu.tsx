import Link from "next/link";
import Image from "next/image";

// static image
import image from "@/public/images/image 10.svg";

const styles = {
  section: "h-[70vh] relative",
  image: "w-full h-full object-cover",
  texts:
    "max-sm:w-full absolute z-10 top-1/2 -translate-y-1/2 left-5 max-sm:left-1/2 max-sm:-translate-x-1/2 flex flex-col items-center justify-center px-14 py-20 max-lg:px-10   max-sm:px-7  max-sm:w-full",
};

const NewMenu = () => {
  return (
    <section className={styles.section}>
      <div className="w-full h-full absolute right-0 left-0 top-0 bottom-0 bg-[#000000a5] z-10"></div>

      <Image
        src={image}
        className={styles.image}
        alt="A diverse group of friends laughing and connecting together"
        priority
      />

      <div className={styles.texts}>
        <div className="max-sm:text-center">
          <h1 className="text-5xl  max-lg:text-4xl max-sm:text-3xl text-white capitalize mb-6 font-bold">
            introducing our new menu additions{" "}
          </h1>

          <p className=" w-2/4  max-lg:w-3/4 max-sm:w-full font-paragraph text-white mb-6 text-lg md:text-xl tracking-normal leading-7">
            Spend quality time with friends, family, and colleagues from
            different ethnicities and communities—all in one place.
          </p>

          <Link
            href="/"
            className="text-white bg-orange  px-10 py-5 max-lg:py-5 max-sm:py-4 font-semibold rounded-2xl"
          >
            Discover what's new
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewMenu;
