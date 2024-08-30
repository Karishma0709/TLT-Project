import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Sidebar from "../components/Sidebar";
import SignUp from "../pages/SignUp";
import User from "../components/User";
import Details from "../components/Details";
import MpcjData from "../components/MpcjData";
import TpmData from "../components/TpmData";
import InfoMarquee from "../components/InfoMarquee";
import Notification from "../components/Notification";
import UpdateMarquee from "../components/UpdateMarquee";
<<<<<<< HEAD
import { Prevyearpaperpdf } from "../components/Prevyearpaperpdf";
import Dashboard from "../components/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "dashboard",
          element: <Sidebar/>,
          children:[
            {
              path:"dashboardcards",
              element: <Dashboard/>,
            },
            {
              path:"user",
              element: <User/>,
            },
            {
              path:"py-paper",
              element: <Details/>,
            },
            {
              path:"mpcj-form",
              element:<MpcjData/>
            },
            {
              path:"mpcj-form",
              element:<MpcjData/>
            },
            {
              path:"tpm-form",
              element:<TpmData/>
            },
            {
              path:"info-marquee",
              element:<InfoMarquee/>
            },
            {
              path:"notification",
              element:<Notification/>
            },
            {
              path:"update-headline",
              element:<UpdateMarquee/>
            },
            {
              path:"Prevyearpaperpdf",
              element:<Prevyearpaperpdf/>
            }
            
          ]
        },
        {
          path: "",
          element: <Login/>,
        },
        {
          path: "sign-up",
          element: <SignUp/>,
        },
    ]
}
])
=======
import Prevyearpaperpdf from "../components/Prevyearpaperpdf";
import Unpaid from "../components/Unpaid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Sidebar />,
        children: [
          {
            path: "user",
            element: <User />,
          },
          {
            path: "py-paper",
            element: <Details />,
          },
          {
            path: "mpcj-form",
            element: <MpcjData />,
          },
          {
            path: "mpcj-form",
            element: <MpcjData />,
          },
          {
            path: "tpm-form",
            element: <TpmData />,
          },
          {
            path: "info-marquee",
            element: <InfoMarquee />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "update-headline",
            element: <UpdateMarquee />,
          },
          {
            path: "Prevyearpaperpdf",
            element: <Prevyearpaperpdf />,
          },
          {
            path: "Unpaid",
            element: <Unpaid />,
          },
        ],
      },
      {
        path: "",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
>>>>>>> ab9b9467d9423affc49950a7b983e1edc8476290
