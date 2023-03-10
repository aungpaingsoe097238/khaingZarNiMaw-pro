import React from "react";
import { CgGym, CgCode } from "react-icons/cg";
import { GoBook } from "react-icons/go";
import { TbMountain } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";

const Hobbies = () => {
  return (
    <div className="hobbies text-white flex flex-col justify-center">
      <div className="my-2 md:my-5">
        <span className=" italic font-bold">- Hobbies -</span>
      </div>
      <ul className="flex flex-col md:flex-row text-xs md:text-sm md:gap-10 gap-1 ">
        <li>
          <div className="flex gap-1 items-center font-bold">
            <CgGym className=" text-2xl" />
            Gym
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center font-bold">
            <CgCode className=" text-2xl" />
            Coding
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center font-bold">
            <GoBook className=" text-2xl" />
            Reading
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center font-bold">
            <TbMountain className=" text-2xl" />
            Hiking
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center font-bold">
            <IoFastFoodOutline className=" text-2xl" />
            Eating
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
