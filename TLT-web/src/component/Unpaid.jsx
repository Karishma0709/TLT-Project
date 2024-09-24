import React, { useState, useEffect } from "react";
import axios from "axios";

const Unpaid = () => {
  const [unpaidFiles, setUnpaidFiles] = useState([]);

  useEffect(() => {
    fetchUnpaidFiles();
  }, []);

  const fetchUnpaidFiles = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/getUnpaidUpload");
      setUnpaidFiles(result.data.data);
    } catch (error) {
      console.error("Error fetching unpaid files:", error);
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5054/api/UnpaidFiles/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div className="px-5 md:px-20 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Unpaid Files</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-left">SR</th>
              <th className="py-3 px-5 text-left">Title</th>
              <th className="py-3 px-5 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {unpaidFiles.map((file, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b border-gray-200">
                <td className="py-3 px-5">{index + 1}</td>
                <td className="py-3 px-5">{file.title}</td>
                <td className="py-3 px-5">
                  <button
                    className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                    onClick={() => showPdf(file.pdf)}
                  >
                    View
                  </button>
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
