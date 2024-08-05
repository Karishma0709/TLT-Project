// import React, { useEffect } from "react";
// import "./App.css";
// import { Outlet, RouterProvider } from "react-router-dom";
// import { router } from "./component/router/index.jsx";
// // import 'react-toastify/dist/ReactToastify.css';
// // import { ToastContainer } from 'react-toastify';
// import Header from "./component/Header.jsx";
// import Footer from "./component/Footer.jsx";
// import Hambergur from "./component/content/Hambergur.jsx";
// import Whatshap from "./component/whatsapp/Whatsapp.jsx";
// import Telegram from "./component/telegram/Telegram.jsx";

// function App() {

//   return (
//     <>
//       <ToastContainer/>

//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Hambergur />
//       <Telegram />
//       <Whatshap />
//       <Telegram />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "./component/router/index.jsx";
import { ToastContainer } from 'react-toastify';
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Hambergur from "./component/content/Hambergur.jsx";
import Whatshap from "./component/whatsapp/Whatsapp.jsx";
import Telegram from "./component/telegram/Telegram.jsx";
import Context from "./context/index.jsx";
import SummaryApi from "./Common/SummaryAPI.js";

function App() {
  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: 'GET',  // Assuming you want to use GET method
        credentials: "include"
      });
      if (!dataResponse.ok) {
        throw new Error(`HTTP error! Status: ${dataResponse.status}`);
      }
      const dataApi = await dataResponse.json();
      console.log("data-user", dataApi);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  useEffect(() => {
    // user details
    fetchUserDetails();
  }, []);

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails// user fetch
    }}>
      <ToastContainer />

      <Header />
      <main>
        <Outlet />
      </main>
      <Hambergur />
      <Telegram />
      <Whatshap />
      <Telegram />
      <Footer />

      </Context.Provider>
    </>
  );
}

export default App;
