import React from "react";
import Headings from "./utiliti/heading/Heading";
import updaidProduct from "./data/unpaid";

const Unpaid = () => {
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
            {updaidProduct.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="py-3 px-5">{item.id}</td>
                <td className="py-3 px-5">{item.name}</td>
                <td className="py-3 px-5">
                  <a
                    href={item.pdf} 
                    download
                    className="bg-primary text-white py-1 px-4 rounded hover:bg-red-700"
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
