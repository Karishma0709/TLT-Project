import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Home";
import About from "../About";
import StudyEssentials from "../StudyEssentials";
import PrivacyPolicy from "../PrivacyPolicy";
import TnC from "../TnC";
import ContactUs from "../content/Contactus";
import App from "../../App";
import MpcjproductCard from "../content/MpcjproductCard";
import MockTestCard from "../content/MockTestCard";
import ReturnAndRefund from "../content/ReturnAndRefund";
import EmpowermentBatch from "../content/Empowerment-batch";
import RegistrationDetails from "../content/RegistrationDetails";
import Jet from "../Jet";
import Guardiandetails from "../content/Guardiandetails";
import Documents from "../content/Documents";
import Conset from "../content/Conset";
import Educational from "../content/Educational";
import ThankYou from "../content/ThankYou";
import PersonalInfo from "../content/PersonalInfo";
import Gallery from "../Gallery";
import { PYpapers } from "../content/PYpapers";
import PYpaperform from "../content/PYpaperform";
import SubjectTestCard from "../ui/SubjectTestCard";
import Testinstruction from "../ui/Testinstruction";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "study-Essentials",
        element: <StudyEssentials />,
      },
      {
        path: "study-Essentials/MpcjproductCard",
        element: <MpcjproductCard />,
      },
      {
        path: "study-Essentials/MockTestCard",
        element: <MockTestCard />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-conditions",
        element: <TnC />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "previous-year",
        element: <PYpapers />,
      },
      {
        path: "PYpaperform",
        element: <PYpaperform />,
      },
      {
        path: "contact-support",
        element: <ContactUs />,
      },
      {
        path: "return-refund",
        element: <ReturnAndRefund />,
      },
      {
        path: "empowerment",
        element: <EmpowermentBatch />,
      },
      {
        path: "fastTrack",
        element: <RegistrationDetails />,
      },
      {
        path: "mockTest/subjectTest",
        element: <SubjectTestCard />,
      },
      {
        path: "Testinstruction",
        element: <Testinstruction />,
      },
      // {
      //   path: "login-admin",
      //   element: <Login/>,
      // },
      // {
      //   path: "sign-up",
      //   element: <SignUp/>,
      // },
      // {
      //   path: "mockTest/miniMock",
      //   element: <MiniMockTest/>,
      // },
      {
        path: "jet/*",
        element: <Jet />,
        children: [
          {
            path: "personalInfo",
            element: <PersonalInfo />,
          },
          {
            path: "guardiandetails",
            element: <Guardiandetails />,
          },
          {
            path: "documents",
            element: <Documents />,
          },
          {
            path: "conset",
            element: <Conset />,
          },
          {
            path: "educational",
            element: <Educational />,
          },
          {
            path: "thankyou",
            element: <ThankYou />,
          },
        ],
      },
    ],
  },
]);
