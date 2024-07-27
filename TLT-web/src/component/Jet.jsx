import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import PersonalInfo from "./content/PersonalInfo";
import Guardiandetails from "./content/Guardiandetails";
import Documents from "./content/Documents";
import NotFound from "./content/NotFound";
import Sidebar from "./Sidebar";
import Educational from "./content/Educational";
import Conset from "./content/Conset";
import ThankYou from "./content/ThankYou";

const Jet = () => {
  return (
    <div className="bg-white  w-[100%] sm:h-[40rem]  h-[50%] mt-[0px] sm:mt-[0px] rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between items-center">
      <Sidebar />
      {/* <a className="justify-center items-center" href={"/jet/personalInfo"}>
        <button>Fill out a form</button>
      </a> */}
      <Routes>
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/guardiandetails" element={<Guardiandetails />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/conset" element={<Conset />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Jet;
