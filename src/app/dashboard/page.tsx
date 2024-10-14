"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

function DashboardS() {
  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to the dashboard</p>
      </div>
    </DefaultLayout>
  );
}

export default DashboardS;
