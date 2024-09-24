import React, { useEffect } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link, Outlet, useNavigate } from 'react-router-dom';
// import ROLE from '../Common/Role';

const Sidebar = () => {
  return (
    <div className="min-h-[calc(100vh-0px)] md:flex hidden">
      <aside className="bg-red-500 min-h-full  w-full  max-w-60 customShadow text-white">
        <div className="h-32  flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center">
            <FaRegCircleUser />
          </div>
          <p className="capitalize text-lg font-semibold">
            {/* {user?.name} */}
            Student Panel
          </p>
          {/* <p className='text-sm'>{user?.role}</p> */}
        </div>

        {/***navigation */}
        {/* <div>
          <nav className="grid p-4">
            <Link
              to={'py-paper'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Previou Year Paper
            </Link>
            <Link
              to={'Prevyearpaperpdf'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Previou Year Paper Pdf
            </Link>
            <Link
              to={'mpcj-form'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              MPCJ form
            </Link>
            <Link
              to={'FastTrackForm'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              FastTrack Form Data
            </Link>
            <Link
              to={'Unpaid'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Unpaid Products
            </Link>
            <Link
              to={'EmpowermentAdmin'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              EmpowermentAdmin
            </Link>
            <Link
              to={'tpm-form'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              TPM form
            </Link>
            <Link
              to={'update-headline'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              HeadLine
            </Link>
            <Link
              to={'notification'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Notification
            </Link>

            <Link
              to={'SyllabusUpload'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Upload Syllabus
            </Link>

            <Link
              to={'jetformdetail'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Jet Form Details
            </Link>
            <Link
              to={'info-marquee'}
              className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
            >
              Setting
            </Link>
          </nav>
        </div> */}
      </aside>

      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;