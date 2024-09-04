import React from "react";
import AboutFirm from "./content/AboutFirm";
import Mentor from "./content/Mentor";
import MissionVision from "./content/MissionVision";

const About = () => {
  return (
    <>
      <div className="my-5">
        <div className="flex flex-row md:justify-between">
          <div className="w-full mb-6 lg:mb-0 banner2"></div>
        </div>
      </div>

      {/* <div  className="h-[40vh] lg:h-[65vh] w-full flex lg:flex-row items-center justify-center m-0"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "800px"}}></div> */}
      <AboutFirm />
      <MissionVision />
      <Mentor />
    </>
  );
};

export default About;
