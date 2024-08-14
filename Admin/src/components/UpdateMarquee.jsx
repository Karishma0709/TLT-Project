import React, { useState } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const UpdateMarquee = ({ marqueeId }) => {
  const [marqueeText, setMarqueeText] = useState('');

  const handleInputChange = (e) => {
    setMarqueeText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(SummaryApi.updateMarquee.url, {
        marquee: marqueeText,
      });
      console.log('Marquee updated successfully:', response.data);
      // Optionally, clear the input or display a success message
    } catch (error) {
      console.error('Error updating marquee:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='font-semibold pb-2' htmlFor="add">Marquee:</label>
        <textarea
          name="add"
          placeholder='Write your marquee'
          className='w-full p-3 max-h-svh border border-black'
          value={marqueeText}
          onChange={handleInputChange}
        ></textarea>
        <div className='text-center'>
          <button type="submit" className='p-2 rounded-md my-4 font-semibold shadow-red-300 shadow'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMarquee;
