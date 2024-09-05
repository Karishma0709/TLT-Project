import React, { useEffect, useState } from 'react';
import SummaryApi from '../Common/SummaryApi';
import { toast } from 'react-toastify';
import moment from 'moment';

const TpmData = () => {
  const [tpmData, setTpmData] = useState([]);

  const fetchAllData = async () => {
    try {
      const fetchData = await fetch(SummaryApi.AlltpmData.url, {
        method: SummaryApi.AlltpmData.method,
        credentials: 'include',
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setTpmData(dataResponse.data);
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
    toast.info(`Update functionality for ID: ${id} will be implemented.`);
  };

  const handleDelete = (id) => {
    toast.warn(`Delete functionality for ID: ${id} will be implemented.`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">TPM Data</h2>
      <table className="min-w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">S.No.</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Contact No</th>
            <th className="p-3 text-left">Purchased Product</th>
            <th className="p-3 text-left">Created Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tpmData.map((data, index) => (
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

export default TpmData;
