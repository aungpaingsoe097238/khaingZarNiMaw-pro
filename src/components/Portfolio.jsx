import React from "react";
import Title from "./utli/Title";
import "swiper/css";
import "swiper/css/pagination";
import ProjectSwiper from "./ProjectSwiper";
import { useDispatch } from "react-redux";
import { addState } from "../features/services/modelSlice";

const Portfolio = () => {
  const dispatch = useDispatch();
  const handleOpenProjectModel = () => {
    dispatch(addState({ screen: "projects" }));
  };
  return (
    <div
      className="portfolio md:h-screen my-5 md:my-0 flex flex-col justify-center "
      id="portfolio"
    >
      <Title title="Portfolio" subTitle="Work do so far" />
      <div>
        <p className=" mt-5 text-gray-500 text-sm">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          adilip litora torquent per conubia nostra, per inceptos himenaeos.
          Mauris in erat justo.
        </p>
      </div>
      <div className=" md:hidden">
        <ProjectSwiper media="1" />
      </div>
      <div className=" hidden md:block ">
        <ProjectSwiper media="3" />
      </div>
      <div className=" text-center font-bold text-slate-700">
        <span className=" cursor-pointer" onClick={handleOpenProjectModel}>
          show all projects
        </span>
      </div>
    </div>
  );
};

export default Portfolio;
