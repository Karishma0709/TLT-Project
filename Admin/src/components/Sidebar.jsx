import React, { useEffect } from "react";
// import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
<<<<<<< HEAD
import { RiAdminFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoIosAlert } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../Common/Role';

=======
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../Common/Role";
>>>>>>> ab9b9467d9423affc49950a7b983e1edc8476290

const Sidebar = () => {
  // const user = useSelector(state => state?.user?.user)
  // const navigate = useNavigate()

  // useEffect(()=>{
  //     if(user?.role !== ROLE.ADMIN){
  //         navigate("/")
  //     }
  // },[user])

  return (
    <div className="min-h-[calc(100vh-0px)] md:flex hidden">
      <aside className="bg-red-500 min-h-full  w-full  max-w-60 customShadow text-white">
        <div className="h-32  flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center">
            <FaRegCircleUser />
            {/* {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
                        ) : (
                            <FaRegCircleUser/>
                        )
                        } */}
          </div>
          <p className="capitalize text-lg font-semibold">
            {/* {user?.name} */}
            Admin
          </p>
          {/* <p className='text-sm'>{user?.role}</p> */}
        </div>

<<<<<<< HEAD
                 {/***navigation */}       
                <div>   
                    <nav className='grid p-4'>
                    <Link to={"dashboardcards"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><MdDashboard  className='mr-2'/>Dashboard</Link>
                        <Link to={"user"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><RiAdminFill  className='mr-2' />All Users</Link>
                        <Link to={"py-paper"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><FaFilePdf  className='mr-2' />Previou Year Paper</Link>
                        <Link to={"Prevyearpaperpdf"} className='flex items-center space-x-5 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><FaFilePdf  className='mr-2' />Previou Year Paper Pdf</Link>
                        <Link to={"mpcj-form"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><RiAdminFill  className='mr-2'/>MPCJ form</Link>
                        <Link to={"tpm-form"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><RiAdminFill  className='mr-2'/>TPM form</Link>
                        <Link to={"update-headline"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><IoIosAlert  className='mr-2'/>Alert</Link>
                        <Link to={"notification"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><IoMdNotifications  className='mr-2'/>Notifications</Link>
                        <Link to={"info-marquee"} className='flex items-center space-x-2 px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold'><IoSettings  className='mr-2'/>Setting</Link>
                    
                        
                    </nav>
                </div>  
        </aside>
=======
        {/***navigation */}
        <div>
          <nav className="grid p-4">
            {/* <Link
              to={"user"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              All Users
            </Link>
            <Link
              to={"py-paper"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Previou Year Paper
            </Link>
            <Link
              to={"Prevyearpaperpdf"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Previou Year Paper Pdf
            </Link>
            <Link
              to={"mpcj-form"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              MPCJ form
            </Link>
            <Link
              to={"tpm-form"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              TPM form
            </Link>
            <Link
              to={"update-headline"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              HeadLine
            </Link>
            <Link
              to={"notification"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Notification
            </Link>
            <Link
              to={"product-upload"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Product
            </Link> */}
>>>>>>> ab9b9467d9423affc49950a7b983e1edc8476290

            <Link
              to={"user"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              All Users
            </Link>
            <Link
              to={"py-paper"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Previou Year Paper
            </Link>
            <Link
              to={"Prevyearpaperpdf"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Previou Year Paper Pdf
            </Link>
            <Link
              to={"mpcj-form"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              MPCJ form
            </Link>

            <Link
              to={"Unpaid"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Unpaid Products
            </Link>
            <Link
              to={"tpm-form"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              TPM form
            </Link>
            <Link
              to={"update-headline"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              HeadLine
            </Link>
            <Link
              to={"notification"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Notification
            </Link>
            <Link
              to={"info-marquee"}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Setting
            </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
