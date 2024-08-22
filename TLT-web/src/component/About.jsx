import React from "react";
import AboutFirm from "./content/AboutFirm";
import Mentor from "./content/Mentor";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";
import MissionVision from "./content/MissionVision";
import banner2 from "../assets/banner2.webp"

const About = () => {
  return (
    <div>
     <Breadcrumbs   heading={'About'} bannerImage={banner2}>
     <AboutFirm />
     <MissionVision/>
     <Mentor />
     </Breadcrumbs>
    </div>
  );
};

export default About;
