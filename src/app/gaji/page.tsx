"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

function Gaji() {
  return (
    <DefaultLayout title="Gaji">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Gaji</h1>
        <p className="text-gray-600">Welcome to the Gaji page</p>
      </div>

      <BottomNavbar currentPage="gaji" />
    </DefaultLayout>
  );
}

export default Gaji;
