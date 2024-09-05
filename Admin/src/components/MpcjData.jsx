import React, { useEffect, useState } from 'react';
import SummaryApi from '../Common/SummaryApi';
import { toast } from 'react-toastify';
import moment from 'moment';

const MpcjData = () => {
  const [mpcjData, setMpcjData] = useState([]);

  const fetchAllData = async () => {
    try {
      const fetchData = await fetch(SummaryApi.AllmpcjData.url, {
        method: SummaryApi.AllmpcjData.method,
        credentials: 'include',
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setMpcjData(dataResponse.data);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error('An error occurred while fetching the data.');
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleUpdate = (id) => {
    // Implement update logic here
    toast.info(`Update functionality for ID: ${id} will be implemented.`);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    toast.warn(`Delete functionality for ID: ${id} will be implemented.`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">MPCJ Data</h2>
      <table className="min-w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">S.No.</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Contact No</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Created Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mpcjData.map((data, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{data.name}</td>
              <td className="p-3">{data.email}</td>
              <td className="p-3">{data.contact}</td>
              <td className="p-3">{data.purchasedProduct}</td>
              <td className="p-3">{moment(data.createdAt).format('LL')}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleUpdate(data._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(data._id)}
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

export default MpcjData;
