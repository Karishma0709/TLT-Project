import React from "react";
import "./App.css";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "./component/router/index.jsx";

import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Hambergur from "./component/content/Hambergur.jsx";
import Whatshap from "./component/whatsapp/Whatsapp.jsx";
import Telegram from "./component/telegram/Telegram.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Hambergur />
      <Telegram/>
      <Whatshap />
      <Telegram/>
      <Footer />
    </>
  );
}

export default App;
