import React from "react";
import Headings from "../utiliti/heading/Heading";
import { testcarddata } from "../data/Testcarddata";

const Subjectcontent = () => {
  return (
    <div>
      {testcarddata.map((items, index) => (
        <div key={index}>
          <Headings heading={"h4"}>{items.heading}</Headings>
          <ul>
            <li>{items.testitems}</li>
            <li>{items.testitems2}</li>
            <li>{items.testitems3}</li>
            <li>{items.testitems4}</li>
            <li>{items.testitems5}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Subjectcontent;
