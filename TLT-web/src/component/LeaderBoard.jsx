import React from "react";
import Headings from "./utiliti/heading/Heading";

const LeaderBoard = () => {
  return (
    <div className="px-5 md:px-20 py-8">
      <Headings heading={"h2"} style="text-center text-2xl font-bold">
        Leader <span className="text-primary">Board</span>
        
      </Headings>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-center">S.no</th>
              <th className="py-3 px-5 text-center">Name</th>
              <th className="py-3 px-5 text-center">Saturday Mains Test</th>
              <th className="py-3 px-5 text-center">MCQ</th>
              <th className="py-3 px-5 text-center">Group Discussion</th>
              <th className="py-3 px-5 text-center">Judgment Writing</th>
              <th className="py-3 px-5 text-center">Translation</th>
              <th className="py-3 px-5 text-center">Average</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">

            <tr className="hover:bg-red-200 border-b border-gray-200">
              <td className="py-3 px-5 text-center">1</td>
              <td className="py-3 px-5">Test1</td>
              <td className="py-3 px-5 text-center">95</td>
              <td className="py-3 px-5 text-center">55</td>
              <td className="py-3 px-5 text-center">78</td>
              <td className="py-3 px-5 text-center">67</td>
              <td className="py-3 px-5 text-center">88</td>
              <td className="py-3 px-5 text-center font-bold">75</td>
            </tr>
           
            <tr className="hover:bg-red-200 border-b border-gray-200">
              <td className="py-3 px-5 text-center">2</td>
              <td className="py-3 px-5">Test2</td>
              <td className="py-3 px-5 text-center">95</td>
              <td className="py-3 px-5 text-center">55</td>
              <td className="py-3 px-5 text-center">78</td>
              <td className="py-3 px-5 text-center">67</td>
              <td className="py-3 px-5 text-center">88</td>
              <td className="py-3 px-5 text-center font-bold">75</td>
            </tr>

            <tr className="hover:bg-red-200 border-b border-gray-200">
              <td className="py-3 px-5 text-center">3</td>
              <td className="py-3 px-5">Test3</td>
              <td className="py-3 px-5 text-center">95</td>
              <td className="py-3 px-5 text-center">55</td>
              <td className="py-3 px-5 text-center">78</td>
              <td className="py-3 px-5 text-center">67</td>
              <td className="py-3 px-5 text-center">88</td>
              <td className="py-3 px-5 text-center font-bold">75</td>
            </tr>

            <tr className="hover:bg-red-200 border-b border-gray-200">
              <td className="py-3 px-5 text-center">4</td>
              <td className="py-3 px-5">Test4</td>
              <td className="py-3 px-5 text-center">95</td>
              <td className="py-3 px-5 text-center">55</td>
              <td className="py-3 px-5 text-center">78</td>
              <td className="py-3 px-5 text-center">67</td>
              <td className="py-3 px-5 text-center">88</td>
              <td className="py-3 px-5 text-center font-bold">75</td>
            </tr>

            <tr className="hover:bg-red-200 border-b border-gray-200">
              <td className="py-3 px-5 text-center">5</td>
              <td className="py-3 px-5">Test5</td>
              <td className="py-3 px-5 text-center">95</td>
              <td className="py-3 px-5 text-center">55</td>
              <td className="py-3 px-5 text-center">78</td>
              <td className="py-3 px-5 text-center">67</td>
              <td className="py-3 px-5 text-center">88</td>
              <td className="py-3 px-5 text-center font-bold">75</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
