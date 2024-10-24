"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

function Cuti() {
  return (
    <DefaultLayout title="Cuti">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Cuti</h1>
        <p className="text-gray-600">Welcome to the Cuti page</p>
      </div>

      <BottomNavbar currentPage="cuti" />
    </DefaultLayout>
  );
}

export default Cuti;
