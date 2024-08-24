import React from 'react';
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Title 1</h3>
              <p className="text-gray-600">This is some content for card 1.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Title 2</h3>
              <p className="text-gray-600">This is some content for card 2.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Title 3</h3>
              <p className="text-gray-600">This is some content for card 3.</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Title 4</h3>
              <p className="text-gray-600">This is some content for card 3.</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Title 5</h3>
              <p className="text-gray-600">This is some content for card 3.</p>
            </div>

           
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
