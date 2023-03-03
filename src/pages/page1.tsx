import React, { useState, useEffect, FC } from "react";
import styles from "@/styles/Home.module.css";

const Navbars: FC<{ creep: boolean }> = ({ creep }) => {
  return (
    <>
      {creep ? (
        <div className="text-2xl md:w-[98vw] mx-[1vw] mt-1  border-4 border-white absolute top-0">
          <div className="flex justify-around py-3 md:mx-10">
            <span className="text-3xl font-creep">MyLogo</span>{" "}
            <div className="flex gap-5">
              <a>Products</a>
              <a>About</a>
              <a>Contact</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-2xl md:w-[98vw] mx-[1vw] mt-1 border-4 border-black absolute top-0">
          <div className="flex justify-around py-3 md:mx-10">
            <span className="text-3xl font-fredoka">MyLogo</span>{" "}
            <div className="flex gap-5">
              <a>Products</a>
              <a>About</a>
              <a>Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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
        <Navbars creep={true} />
        <h1 className=" w-[70vw] mx-[15vw]">
          This is gonna be <br /> <span className="font-creep">aweful</span>
        </h1>
      </div>
      <div
        style={{ width: `${mousePos}%` }}
        className={`h-screen bg-yellow-300 text-black  font-semibold text-6xl md:text-9xl grid items-center text-center overflow-hidden absolute w-full `}
      >
        <Navbars creep={false} />
        <h1 className="w-[70vw] mx-[15vw]">
          This is gonna be <br /> <span className="font-fredoka">awsome</span>
        </h1>
      </div>
    </div>
  );
};

export default page1;
