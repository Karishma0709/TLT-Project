import React from "react";
import StudyCards from "./content/StudyCards";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";
import banner3 from "../assets/banner3.webp"

const StudyEssentials = () => {
  return (
    <>
     <div  className="h-[40vh] lg:h-[50vh] w-full flex items-center justify-center m-0 relative"
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom:"100px",
          backgroundRepeat: "no-repeat",
          paddingTop: "1000px"}}></div>
        <StudyCards />
    </>
  );
};

export default StudyEssentials;
