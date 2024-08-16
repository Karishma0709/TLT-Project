import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../Common/SummaryAPI';

const MarqueeUI = () => {
  const [marqueeData, setMarqueeData] = useState('');

  const fetchAllData = async () => {
    try {
      const fetchData = await fetch(SummaryApi.AllmarqueeGet.url, {
        method: SummaryApi.AllmarqueeGet.method,
        credentials: 'include',
      });

      const dataResponse = await fetchData.json();
      console.log(dataResponse);
      if (dataResponse.success) {
        setMarqueeData(dataResponse.data.marquee); // Access the "marquee" property directly
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

  return (
    <marquee width="100%" behavior="scroll" className="bg-red-600 fixed bottom-0 z-20 font-bold py-1 text-white text-shadow">
      {marqueeData || "No Marquee Data Available"} {/* Display marquee data or a fallback message */}
    </marquee>
  );
};

export default MarqueeUI;
