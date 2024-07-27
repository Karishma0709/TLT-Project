import React from "react";
import { FaGlobe } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaSortNumericUp } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { subjectdata } from "../data/subjecttextdata";
import { NavLink } from "react-router-dom";
const SubjectTestCard = () => {
  return (
    <div className="px-5 md:px-20 py-8">
      {subjectdata.map((items, index) => (
        <div key={index}>
          <div className="flex flex-wrap">
            <div>{items.mock_icon}</div>
            <div>{items.mock_name}</div>
          </div>
          <ul>
            <li className="flex">
              <FaGlobe className="mt-2 mr-5" />
              {items.language}
            </li>
            <li className="flex">
              <IoStar className="mt-2 mr-5" />
              {items.rating}
            </li>
            <li className="flex">
              <FaSortNumericUp className="mt-2 mr-5" />
              {items.Total_mock}
            </li>
            <li className="flex">
              <GoClockFill className="mt-2 mr-5" />
              {items.Duration}
            </li>
            <li className="flex">
              <FaEdit className="mt-2 mr-5" />
              {items.start}
            </li>
          </ul>
          <NavLink
            className="bg-primary rounded-lg py-2 px-10 mt-3"
            to="/Testinstruction"
          >
            {items.btn_content}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SubjectTestCard;
