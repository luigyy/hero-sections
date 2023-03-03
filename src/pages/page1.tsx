import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

interface page1Props {}

const page1: React.FC<page1Props> = ({}) => {
  const [mousePos, setMousePos] = useState(0);

  //make width follow cursor
  useEffect(() => {
    //set initial position to cursor position

    const handleMouseMove = (event: MouseEvent) => {
      const p = (event.clientX / window.innerWidth) * 100;
      setMousePos(p);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="font-anton tracking-widest">
      <div
        className={`h-screen  bg-black text-white  font-semibold text-6xl md:text-9xl grid items-center text-center overflow-hidden absolute w-full`}
      >
        <h1 className=" w-[70vw] mx-[15vw]">
          This is gonna be <br /> <span className="font-creep">aweful</span>
        </h1>
      </div>
      <div
        style={{ width: `${mousePos}%` }}
        className={`h-screen bg-yellow-300 text-black  font-semibold text-6xl md:text-9xl grid items-center text-center overflow-hidden absolute w-full `}
      >
        <h1 className="w-[70vw] mx-[15vw]">
          This is gonna be <br /> <span className="font-fredoka">awsome</span>
        </h1>
      </div>
    </div>
  );
};

export default page1;
