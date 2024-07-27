import React from "react";
import Headings from "../utiliti/heading/Heading";
import { data } from "../data/mentor";

const Mentor = () => {
  return (
    <section className="mx-5 md:mx-16 lg:mx-20 md:my-20 mt-10">
      <div className="flex flex-wrap justify-center items-center">
        <div className="md:gap-5 lg:gap-0 sm:gap-20 aboutMentor">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className="full-border">
            <Headings heading={"h6"}>
              {data.post}
            </Headings>
          </div>
          <div className="lg:w-[320px] w-full mt-7 leading-loose z-10">
            <div className="flex flex-col gap-3 flex-wrap md:text-7xl text-7xl font-medium">
              <span className="text-primary font-bold">Shubham</span> <span>Upadhyay</span> <span>Sir</span>
            </div>
          </div>
        </div>
        <div className="w-[350px] lg:w-[350px] z-0">
          <img src={data.image} alt="" />
        </div>
        </div>
        <div className="lg:w-[400px] w-full md:mt-16 mt-10 text-justify">
          {data.text1}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
