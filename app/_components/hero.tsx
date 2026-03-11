import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="absolute w-full h-screen overflow-hidden -z-10">
      <Image
        src={"/hero.gif"}
        alt="hero-img"
        width={1000}
        height={1000}
        unoptimized
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="flex flex-col items-center mt-44 absolute w-full">
        <h2 className="text-7xl font-bold font-game">Start your</h2>
        <h2
          className="text-8xl font-bold font-game text-yellow-400 mt-2"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,",
          }}
        >
          Coding Adventure
        </h2>
        <h2 className="mt-10 font-game text-3xl">
          Beginner friendly coding courses and project
        </h2>
        <Button variant={"pixel"} className="m-7 font-game text-3xl p-6">
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;
