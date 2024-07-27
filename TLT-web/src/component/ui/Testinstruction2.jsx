import React from "react";
import { instructiondata2 } from "../data/testinstruction";

const Testinstruction2 = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {instructiondata2.map((items, index) => (
          <div key={index}>
            <div>
              <h2 className="text-primary font-bold text-2xl my-3">
                {items.heading1}
              </h2>
              <ol className="">
                <li className="mb-2">{items.li1}</li>
                <li className="mb-2">{items.li2}</li>
                <li className="mb-2">{items.li3}</li>
                <li className="mb-2">{items.li4}</li>
              </ol>
            </div>
            <h2 className="text-primary font-bold text-2xl my-3">
              {items.heading2}
            </h2>
            <ol>
              <li className="mb-2">{items.lii1}</li>
              <li className="mb-2">{items.lii2}</li>
              <li className="mb-5">{items.lii3}</li>
            </ol>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-6">
          Choose your default Language
          <label
            for="lang"
            className="border border-1 bg-primary py-1 text-white font-bold ps-2 rounded-md"
          >
            Select Language
            <select
              id="lang"
              className="bg-primary text-white font-bold rounded-md"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </label>
          Please note that all question will appear in your default language.
          This language can't be changed after-words.
        </p>
        <p>
          <input type="checkbox" /> I have read and understood all the
          instructions. I understand that using unfair means of any sort for any
          advantage will lead to immediate disqualification. The decision of
          ixambee.com will be final in these matters.
        </p>
      </div>
    </>
  );
};

export default Testinstruction2;
