import React from "react";
import AboutFirm from "./content/AboutFirm";
import Mentor from "./content/Mentor";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";
import MissionVision from "./content/MissionVision";
import banner2 from "../assets/banner2.webp"

const About = () => {
  return (
    <div>
     <div  className="h-[40vh] lg:h-[65vh] w-full flex items-center justify-center m-0 relative"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "800px"}}></div>
     <AboutFirm />
     <MissionVision/>
     <Mentor />
     </div> 
  );
};

export default About;
