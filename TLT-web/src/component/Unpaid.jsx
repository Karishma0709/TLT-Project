import React from "react";
import Headings from "./utiliti/heading/Heading";
// import updaidProduct from "./data/unpaid";
import { useState, useEffect } from "react";
import axios from "axios";

const Unpaid = () => {
  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:8080/api/get-files"); //backend wala port number aya ga
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const showPdf = (pdf) => {
    window.open(
      `http://localhost:5054/api/files/${pdf}`,
      "_blank",
      "noreferrer"
    );
  };
  return (
    <div className="px-5 md:px-20 py-8">
      <Headings heading={"h2"} style="text-center">
        Bare <span className="text-primary">Act</span>
      </Headings>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-left">SR</th>
              <th className="py-3 px-5 text-left">Name of Bare Act</th>
              <th className="py-3 px-5 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {allImage == null
              ? ""
              : allImage.map((data, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 border-b border-gray-200"
                  >
                    <td className="py-3 px-5">{index + 1}</td>
                    <td className="py-3 px-5">{data.title}</td>
                    <td className="py-3 px-5">
                      <a
                        // href={data.pdf}
                        target="_blank"
                        download
                        className="bg-primary text-white py-1 px-4 rounded hover:bg-red-700"
                        onClickCapture={() => showPdf(data.pdf)}
                      >
                        Download PDF
                      </a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Unpaid;
