import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../Common/SummaryApi';

const Details = () => {
  const [allPapers, setAllPapers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.ALlpyPapers.url, {
        method: SummaryApi.ALlpyPapers.method,
        credentials: 'include',
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setAllPapers(dataResponse.data);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error('An error occurred while fetching the data.');
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleUpdate = (paperId) => {
    // Implement the update functionality here
    toast.info(`Update functionality for paper ID: ${paperId} will be implemented.`);
  };

  const handleDelete = (paperId) => {
    // Implement the delete functionality here
    toast.warn(`Delete functionality for paper ID: ${paperId} will be implemented.`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Details</h2>
      <table className="min-w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">Sr.</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Number</th>
            <th className="p-3 text-left">Created Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allPapers.map((paper, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{paper.name}</td>
              <td className="p-3">{paper.email}</td>
              <td className="p-3">{paper.number}</td>
              <td className="p-3">{new Date(paper.createdAt).toLocaleDateString()}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleUpdate(paper._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(paper._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
