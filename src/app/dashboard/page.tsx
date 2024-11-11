"use client";

import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import React from "react";

function DashboardS() {
  const dataPetugas = [
    ["nama", "John Doe"],
    ["nik", "1234567890"],
    ["Penugasan", "Lorem Ipsum Dolor Sit Amet"],
    ["email", "lorem@ipsum"],
    ["no hp", "081234567890"],
    ["alamat", "Jl. Lorem Ipsum Dolor Sit Amet"],
  ];
  return (
    <DefaultLayout title="Dashboard">
      <div className="relative mx-auto h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
        <div className="relative drop-shadow-2">
          <Image
            src={"/images/user/user.png"}
            width={160}
            height={160}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="profile"
          />
        </div>
      </div>
      <div className="mt-5 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="grid grid-cols-12 gap-0">
          {dataPetugas.map((data) => (
            <React.Fragment key={data[0]}>
              <div className="col-span-4 mt-1 capitalize">{data[0]}</div>
              <div className="col-span-1 mt-1">:</div>
              <div className="col-span-7 mt-1">{data[1]}</div>
            </React.Fragment>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Edit
        </div>
      </div>
      <BottomNavbar currentPage="home" />
    </DefaultLayout>
  );
}

export default DashboardS;
