import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers, FaRocket, FaFileAlt, FaRegClipboard, FaPaperPlane, FaClipboardCheck } from 'react-icons/fa';

const Dashboard = () => {
  const [empowermentCount, setEmpowermentCount] = useState(0);
  const [fastTrackCount, setFastTrackCount] = useState(0);
  const [jetCount, setJetCount] = useState(0);
  const [MPCJCount, setMPCJCount] = useState(0);
  const [pyPapersCount, setPyPapersCount] = useState(0);
  const [tpmCount, setTpmCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch EmpowermentForm count
  const fetchEmpowermentCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/getTotalEmpowermentForms'
      );
      setEmpowermentCount(response.data.totalForms);
    } catch (error) {
      console.error('Error fetching EmpowermentForm count:', error);
    }
  };

  // Fetch FastTrackForm count
  const fetchFastTrackCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/getTotalFastTrackForms'
      );
      setFastTrackCount(response.data.totalForms);
    } catch (error) {
      console.error('Error fetching FastTrackForm count:', error);
    }
  };

  // Fetch JetForm count
  const fetchJetCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/getTotalJetForms'
      );
      setJetCount(response.data.totalForms);
    } catch (error) {
      console.error('Error fetching JetForm count:', error);
    }
  };

  // Fetch MPCJForm count
  const fetchMPCJCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/getTotalMPCJform'
      );
      setMPCJCount(response.data.totalForms);
    } catch (error) {
      console.error('Error fetching MPCJForm count:', error);
    }
  };

  // Fetch PyPapers count
  const fetchPyPapersCount = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/getTotalPyPapersCount'
      );
      setPyPapersCount(response.data.totalForms);
    } catch (error) {
      console.error('Error fetching PyPapers count:', error);
    }
  };

  const fetchTpmCount = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/getTotalTpmCount');
      setTpmCount(response.data.totalForms);
    } catch (error) {
      console.error('Error fetching TPM count:', error);
    }
  };

  // Fetch all form counts on component mount
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchEmpowermentCount(),
      fetchFastTrackCount(),
      fetchJetCount(),
      fetchMPCJCount(),
      fetchPyPapersCount(),
      fetchTpmCount(),
    ])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

 return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading form data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card for Empowerment Forms */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-blue-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total Empowerment Forms</h3>
              <p className="text-4xl font-bold text-blue-600">{empowermentCount}</p>
            </div>
          </div>

          {/* Card for FastTrack Forms */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <FaRocket className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total FastTrack Forms</h3>
              <p className="text-4xl font-bold text-green-600">{fastTrackCount}</p>
            </div>
          </div>

          {/* Card for Jet Forms */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <FaFileAlt className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total Jet Forms</h3>
              <p className="text-4xl font-bold text-green-600">{jetCount}</p>
            </div>
          </div>

          {/* Card for MPCJ Forms */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <FaRegClipboard className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total MPCJ Forms</h3>
              <p className="text-4xl font-bold text-green-600">{MPCJCount}</p>
            </div>
          </div>

          {/* Card for PyPapers */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <FaPaperPlane className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total Py Papers</h3>
              <p className="text-4xl font-bold text-green-600">{pyPapersCount}</p>
            </div>
          </div>

          {/* Card for TPM Forms */}
          <div className="p-6 bg-white shadow-lg rounded-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <FaClipboardCheck className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Total TPM Forms</h3>
              <p className="text-4xl font-bold text-green-600">{tpmCount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;