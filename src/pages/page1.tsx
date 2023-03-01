import React, { useState, useEffect } from "react";

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
    <div className="">
      <div
        style={{ width: `${mousePos}%` }}
        className="h-screen text-5xl grid items-center text-center  overflow-hidden absolute w-full "
      >
        <h1 className="w-[70vw] mx-[15vw]  ">
          This is gonna be <br /> awesome
        </h1>
      </div>
      <div className="h-screen  text-5xl grid items-center text-center  overflow-hidden absolute w-full">
        <h1 className=" w-[70vw] mx-[15vw] ">
          This is gonna be <br /> aweful
        </h1>
      </div>
    </div>
  );
};

export default page1;
