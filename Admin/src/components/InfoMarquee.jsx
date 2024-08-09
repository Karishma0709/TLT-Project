import React, { useState } from 'react'
import SummaryApi from '../Common/SummaryApi'

const InfoMarquee = () => {
  const [marqueeData, setMarqueeData] = useState({marquee:""})
  // Allmarquee


  const handleOnChange=(e)=>{
    const{name,value}=e.target;
    setMarqueeData((prev)=>{
      return{
       ...prev,
       [name]:value
      }
    } )
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
    const contactResponse = await fetch(SummaryApi.Allmarquee.url ,{
      method : SummaryApi.Allmarquee.method,
      header: {
        "contect-type" : "application/json"
      },
      body:JSON.stringify(data)
    })
    const dataApi = await contactResponse.json()
    
    if(dataApi.success){
     success(dataApi.message)
    }
    if(dataApi.error){
      error(dataApi.message)
    }

    console.log("data", dataApi);
  }

  return (
    <div>
       
       <form action="" onSubmit={handleSubmit}>
        <label className='font-semibold pb-2' htmlFor="add">Marquee:</label>
       <textarea name="add" id="" placeholder='write your marquee' className='w-full p-3 max-h-svh border border-black' value={marqueeData.marquee} onChange={handleOnChange} ></textarea>
       <div className=' text-center'>
       <button className='p-2 rounded-md my-4 font-semibold shadow-red-300 shadow'>Submit</button>
       </div>

       </form>
     
    </div>
  )
}

export default InfoMarquee