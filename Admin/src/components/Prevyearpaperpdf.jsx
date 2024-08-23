import React from 'react'

export const Prevyearpaperpdf = () => {
  return (
    <>
    <form  className="flex justify-center gap-10 border border-spacing-0 p-4"  action="/upload" method="post" enctype="multipart/form-data">

        {/* <div>
          <h4>File Name</h4>
          <input type="file" className="border" name='papertitle'/>
          <button type='submit'>Upload</button>
        </div> */}
        <div>
          <h4>Pdf of File</h4>
          <input type="file" className="border"  name='paperpdf'/>
          <button   type='submit'>Upload</button>
        </div>
      
      </form></>
  )
}
