import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const UpdateMarquee = ({ marqueeId }) => {
  const [marqueeText, setMarqueeText] = useState('');
  const [marqueeList, setMarqueeList] = useState([]);

  // Handle marquee text change
  const handleInputChange = (e) => {
    setMarqueeText(e.target.value);
  };

  // Fetch all marquees from the server
  const fetchMarqueeList = async () => {
    try {
      const response = await axios.get(SummaryApi.getAllMarquees.url);
      if (response.data.success) {
        setMarqueeList(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching marquee list:', error);
    }
  };

  // Submit marquee update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(SummaryApi.updateMarquee.url, {
        marquee: marqueeText,
      });
      console.log('Marquee updated successfully:', response.data);
      fetchMarqueeList(); // Refresh the list after update
      setMarqueeText(''); // Optionally clear input after update
    } catch (error) {
      console.error('Error updating marquee:', error);
    }
  };

  // Handle deleting a marquee
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${SummaryApi.deleteMarquee.url}/${id}`);
      console.log('Marquee deleted successfully:', response.data);
      fetchMarqueeList(); // Refresh the list after delete
    } catch (error) {
      console.error('Error deleting marquee:', error);
    }
  };

  // Load marquee list on component mount
  useEffect(() => {
    fetchMarqueeList();
  }, []);

  return (
    <>
      <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Update Marquee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="marquee">
              Marquee Text:
            </label>
            <textarea
              id="marquee"
              name="marquee"
              placeholder="Enter the marquee text here"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={marqueeText}
              onChange={handleInputChange}
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
            >
              Update Marquee
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Marquee Details</h2>
        <table className="w-full table-auto border-collapse border border-gray-800 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-800 p-2">S.No</th>
              <th className="border border-gray-800 p-2">Marquee Text</th>
              <th className="border border-gray-800 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marqueeList.length > 0 ? (
              marqueeList.map((marquee, index) => (
                <tr key={marquee._id} className="text-center hover:bg-gray-100">
                  <td className="border border-gray-800 p-2">{index + 1}</td>
                  <td className="border border-gray-800 p-2">{marquee.text}</td>
                  <td className="border border-gray-800 p-2">
                    <button
                      onClick={() => setMarqueeText(marquee.text)} // Set current marquee text in the input field
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(marquee._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-800 p-2 text-center">
                  No marquees available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpdateMarquee;
