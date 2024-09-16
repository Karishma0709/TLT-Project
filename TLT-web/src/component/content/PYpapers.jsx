import React, { useEffect, useState } from 'react';
import PYpaperform from './PYpaperform';
import Headings from '../utiliti/heading/Heading';
import axios from 'axios';

export const PYpapers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pydata, setPydata] = useState(null);

  useEffect(() => {
    getPy();
  });

  const getPy = async () => {
    const result = await axios.get('http://localhost:8080/api/getpydata');
    console.log(result.data.data);
    setPydata(result.data.data);
  };

  const handleBuyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-12 my-8">
        <Headings heading={'h2'}>
          Previous <span className="text-primary"> Year Papers</span>
        </Headings>

        <div className="flex justify-center flex-wrap gap-12 my-8">
          {pydata == null
            ? ''
            : pydata.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-content-center items-center text-center flex-col w-80 md:w-60"
                >
                  <div>
                    <img
                      src={`http://localhost:8080/notifiesfiles/${item.paperimage}`}
                      className="w-80 md:w-60"
                    />
                  </div>
                  <div className="text-lg font-medium opacity-75">
                    {item.Papertitle}
                  </div>
                  <button
                    className="text-sm font-bold text-white bg-primary px-2 py-1 mt-1 rounded-sm"
                    onClick={handleBuyNowClick}
                  >
                    Download as PDF
                  </button>
                </div>
              ))}

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
              <div className="bg-white p-3 rounded-lg w-96 bg-opacity-100">
                <button
                  className="absolute text-3xl  font-bold   text-black"
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <PYpaperform />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
