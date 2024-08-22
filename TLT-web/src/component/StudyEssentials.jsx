import React from "react";
import StudyCards from "./content/StudyCards";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";
import banner3 from "../assets/banner3.webp"

const StudyEssentials = () => {
  return (
    <>
      <Breadcrumbs heading={"Study Essentials"}  bannerImage={banner3}>
        <StudyCards />
      </Breadcrumbs>
    </>
  );
};

export default StudyEssentials;
