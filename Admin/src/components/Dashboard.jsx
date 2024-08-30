import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import SummaryApi from '../Common/SummaryApi';

const Dashboard = () => {
  // State to hold the counts
  const [formCounts, setFormCounts] = useState({
    totalUsers: 0,
    totalForms: 0,
    totalNotifications: 0,
    totalTpmData: 0, // Added this to display TPM data count
  });

  // Fetch the data counts when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total users count
        const userCountResponse = await fetch(SummaryApi.AllUser.url);
        const userCountData = await userCountResponse.json();

        // Fetch TPM data count
        const tpmDataResponse = await fetch(SummaryApi.AlltpmData.url);
        const tpmData = await tpmDataResponse.json();

        // Fetch total forms count if endpoint is available
        // const formsCountResponse = await fetch(SummaryApi.AllForms.url);
        // const formsCountData = await formsCountResponse.json();

        // Fetch total notifications count if endpoint is available
        // const notificationsCountResponse = await fetch(SummaryApi.AllNotifications.url);
        // const notificationsCountData = await notificationsCountResponse.json();

        // Set state with the fetched data
        setFormCounts({
          totalUsers: userCountData.count,
          totalForms: 0, // Replace with formsCountData.count if endpoint is available
          totalNotifications: 0, // Replace with notificationsCountData.count if endpoint is available
          totalTpmData: tpmData.data.length, // Assuming data is an array
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Total Users */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Total Users</h3>
              <p className="text-gray-600 text-3xl font-semibold">
                {formCounts.totalUsers}
              </p>
            </div>

            {/* Card 2: Total Forms */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Total Forms Submitted</h3>
              <p className="text-gray-600 text-3xl font-semibold">
                {formCounts.totalForms}
              </p>
            </div>

            {/* Card 3: Total Notifications */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Total Notifications</h3>
              <p className="text-gray-600 text-3xl font-semibold">
                {formCounts.totalNotifications}
              </p>
            </div>

            {/* Card 4: Total TPM Data */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Total TPM Data</h3>
              <p className="text-gray-600 text-3xl font-semibold">
                {formCounts.totalTpmData}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
