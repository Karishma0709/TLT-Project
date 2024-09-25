// Dashboard.js
import React from 'react';
import Header from './Header'; // Import the Header component

const Dashboard = () => {
  return (
    <div>
      {/* Dashboard content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Grid for the summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Users count card */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-3xl font-bold text-red-500 mt-3">120</p>
          </div>

          {/* Notifications count card */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-lg font-semibold">Total Notifications</h2>
            <p className="text-3xl font-bold text-blue-500 mt-3">45</p>
          </div>

          {/* Forms count card */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-lg font-semibold">Total Forms</h2>
            <p className="text-3xl font-bold text-green-500 mt-3">80</p>
          </div>

          {/* Orders count card */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-3xl font-bold text-yellow-500 mt-3">32</p>
          </div>
        </div>

        {/* Recent activity */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul>
              <li className="py-2 border-b border-gray-200">
                <span className="font-semibold">John Doe</span> added a new
                form.
              </li>
              <li className="py-2 border-b border-gray-200">
                <span className="font-semibold">Jane Smith</span> updated a
                notification.
              </li>
              <li className="py-2 border-b border-gray-200">
                <span className="font-semibold">Michael Lee</span> completed an
                order.
              </li>
              <li className="py-2">
                <span className="font-semibold">Sarah Connor</span> registered a
                new account.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
