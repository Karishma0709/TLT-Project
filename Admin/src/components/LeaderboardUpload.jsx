import React, { useState } from 'react';
import * as xlsx from 'xlsx';
import { FaMedal, FaClipboardList, FaComment } from 'react-icons/fa';

const LeaderboardUpload = () => {
  const [excelData, setexcelData] = useState([]);

  const readExcel = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer(file);
    const excelfile = xlsx.read(data);
    const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
    const exceljson = xlsx.utils.sheet_to_json(excelsheet);
    console.log(exceljson);
    setexcelData(exceljson);
  };

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'Gold':
        return <FaMedal className="text-yellow-400" />;
      case 'Silver':
        return <FaClipboardList className="text-gray-300" />;
      case 'Bronze':
        return <FaComment className="text-orange-500" />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex items-start flex-col">
        <label className="font-bold text-2xl mb-5">Upload Excel Here</label>

        <input
          type="file"
          className="bg-green-500 text-white font-bold p-2 w-56 rounded-sm"
          onChange={(e) => readExcel(e)}
        />
      </div>

      <div className="leaderboard-container max-w-5xl mx-auto mt-8 bg-gray-50 rounded-lg shadow-lg border border-red-500">
        <h2 className="text-3xl font-bold p-4 text-center text-white bg-red-700 rounded-t-lg shadow-md">
          Leaderboard
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className=" bg-red-500 text-white transition-all hover:shadow-md">
              <th className="py-4 px-4 border-b border-red-300">Name</th>
              <th className="py-4 px-4 border-b border-red-300">Badge</th>
              <th className="py-4 px-4 border-b border-red-300">
                Saturday Mains Test
              </th>
              <th className="py-4 px-4 border-b border-red-300">MCQ</th>
              <th className="py-4 px-4 border-b border-red-300">
                Group Discussion
              </th>
              <th className="py-4 px-4 border-b border-red-300">
                Judgment Writing
              </th>
              <th className="py-4 px-4 border-b border-red-300">Translation</th>
              <th className="py-4 px-4 border-b border-red-300">Score</th>
            </tr>
          </thead>
          <tbody>
            {excelData.map((student, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
                } hover:bg-red-200 transition-colors`}
              >
                <td className="py-4 px-4 text-navy-900 font-semibold">
                  {student.OrderDate}
                </td>
                <td className="py-4 px-4 text-navy-900 flex items-center">
                  {getBadgeIcon(student.Region)}
                  <span className="ml-2 font-semibold">{student.Manager}</span>
                </td>
                <td className="py-4 px-4 text-navy-800">{student.SalesMan}</td>
                <td className="py-4 px-4 text-navy-800">{student.Item}</td>
                <td className="py-4 px-4 text-navy-800">
                  {student.groupDiscussion}
                </td>
                <td className="py-4 px-4 text-navy-800">
                  {student.judgmentWriting}
                </td>
                <td className="py-4 px-4 text-navy-800">
                  {student.translation}
                </td>
                <td className="py-4 px-4 font-bold text-navy-900">
                  {student.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderboardUpload;
