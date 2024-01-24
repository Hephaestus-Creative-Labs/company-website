import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h3 className="text-background dark:text-darkblue font-display text-2xl lg:text-4xl">
            Hello, we are...
          </h3>
          <h1 className="text-background dark:text-darkblue font-display font-bold text-4xl lg:text-6xl mb-5">
            Hephaestus Creative Labs
          </h1>
          <p className="text-background dark:text-darkblue font-inner text-lg lg:text-xl mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, accusantium nobis eius illo, possimus eveniet ea
            laboriosam doloribus ut quidem, nulla hic voluptatum at molestias
            vitae. Aliquid temporibus reprehenderit repudiandae.
          </p>
          <button className="dark:bg-darkblue bg-background dark:text-background text-darkblue w-[150px] h-[50px] rounded-md duration-100 hover:scale-110 hover:font-semibold mr-1.5">
            Contact us
          </button>
          <button className="bg-inherit border-2 border-background text-background dark:border-darkblue dark:text-darkblue dark:hover:bg-background hover:bg-blue dark:hover:text-darkblue hover:text-background w-[150px] h-[50px] rounded-md ml-1.5 duration-100 hover:scale-110 hover:font-semibold">
            Our Portfolio
          </button>
        </div>
        <div className="col-span-5">
          <Image
            src="/images/hero-logo.png"
            alt="hero logo"
            width={300}
            height={300}
            fill=""
            className="mx-auto mt-12 rounded-full hover:scale-110 duration-200"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
