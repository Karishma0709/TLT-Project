import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prevyearpaperpdf = () => {
  const [uploadedPdfs, setUploadedPdfs] = useState(null);
  const [Papertitle, setTitle] = useState('');
  const [paperimage, setStateimg] = useState('');
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchUploadedPdfs();
  }, []);

  const Submitpydata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Papertitle', Papertitle);
    formData.append('paperimage', paperimage);
    try {
      const result = await axios.post(
        'http://localhost:8080/api/PyPaperPDF',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (result.data.status === 'ok') {
        alert('Uploaded Successfully!');
        setTitle('');
        setStateimg('');
        fetchUploadedPdfs(); // Refetch data after upload
      }
    } catch (error) {
      console.error('There was an error uploading the file!', error);
    }
  };

  const handleChange = (e, id) => {
    setEditData({
      ...uploadedPdfs,
      [id]: { ...uploadedPdfs[id], [e.target.name]: e.target.value },
    });
  };

  const UpdatePYPdata = async (id) => {
    try {
      const updateuser = await axios.put(
        `http://localhost:8080/api/pypaperdataupdate/${id}`,
        editData[id]
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deletePYPdata = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/unpaidDelete/${id}`);
      fetchUploadedPdfs(); // Refresh the data after delete
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const fetchUploadedPdfs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/getpydata');
      console.log(response.data.data);
      setUploadedPdfs(response.data.data);
    } catch (error) {
      console.error('Error fetching uploaded PDFs:', error);
    }
  };

  return (
    <>
      <div className="mx-auto p-6 bg-white rounded shadow-lg">
        <form
          className="flex flex-col items-center gap-6 border p-6 rounded"
          onSubmit={Submitpydata}
        >
          <h4 className="text-xl font-bold mb-2 text-gray-700">Upload PDF</h4>

          <div className="flex items-start">
            <div className="flex flex-col">
              <label>Paper Image</label>
              <input
                type="file"
                className="border rounded p-2 mb-4"
                name="paperimage"
                required
                onChange={(e) => setStateimg(e.target.files[0])}
              />
            </div>

            <div className="flex flex-col">
              <label>Paper Title</label>
              <input
                type="text"
                className="border rounded p-2 mb-4"
                name="Papertitle"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
            >
              Upload
            </button>
          </div>
        </form>
      </div>

      <div className="w-full h-full mt-8">
        {Array.isArray(uploadedPdfs) && uploadedPdfs.length > 0 ? (
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Paper Title</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Update</th>
                <th className="px-4 py-2 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {uploadedPdfs.map((item, index) => (
                <tr key={item._id}>
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <input
                      type="text"
                      name="Papertitle"
                      value={
                        editData[item._id]?.Papertitle || item.Papertitle || ''
                      }
                      onChange={(e) => handleChange(e, item._id)}
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <img
                      src={`http://localhost:8080/notifiesfiles/${item.paperimage}`}
                      className="w-20"
                      alt="Paper"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => UpdatePYPdata(item._id)}>
                      Upload
                    </button>
                  </td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => deletePYPdata(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No uploaded PDFs available.</p>
        )}
      </div>
    </>
  );
};

export default Prevyearpaperpdf;
