"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

function Pengaduan() {
  return (
    <DefaultLayout title="Pengaduan">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Pengaduan</h1>
        <p className="text-gray-600">Welcome to the Pengaduan page</p>
      </div>

      <BottomNavbar currentPage="pengaduan" />
    </DefaultLayout>
  );
}

export default Pengaduan;
