"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

function Presensi() {
  return (
    <DefaultLayout title="Presensi">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Presensi</h1>
        <p className="text-gray-600">Welcome to the Presensi page</p>
      </div>

      <BottomNavbar currentPage="presensi" />
    </DefaultLayout>
  );
}

export default Presensi;
