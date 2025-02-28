"use client";

import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import global from "@/lib/global";
import useLocalStorage from "@/hooks/useLocalStorage";
import { DATA_PETUGAS } from "@/types/dataPetugas";
import FormField from "./FormField";

function Dashboard() {
  const [dataPetugas, setDataPetugas] = useState<DATA_PETUGAS>({});
  const [token, setToken] = useLocalStorage("token", "");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<DATA_PETUGAS>({});
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const response = fetch(`${global.api_url}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);

        const userData = {
          nama: data.data.nama,
          nik: data.data.nik,
          penugasan: data.data.penugasan,
          email: data.data.email,
          no_hp: data.data.no_hp,
          alamat: data.data.alamat,
          foto: "https://picsum.photos/200",
        };

        setDataPetugas(userData);
        setFormData(userData);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setFormData({ ...formData, foto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update dataPetugas with formData
    setDataPetugas(formData);
    setIsEditing(false);
  };

  return (
    <DefaultLayout title="Dashboard">
      <div className="relative mx-auto h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
        <div className="relative drop-shadow-2">
          <Image
            src={previewUrl || formData.foto || "/images/user/user.png"}
            width={160}
            height={160}
            className="cursor-pointer rounded-full"
            alt="profile"
            onClick={() => isEditing && fileInputRef.current?.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="mt-5 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
        {isEditing ? (
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-12 gap-0">
              {Object.entries(formData).map(
                (data: [string, string | number | null]) =>
                  data[0] === "foto" ? null : (
                    <FormField
                      key={data[0]}
                      name={data[0]}
                      value={data[1]}
                      onChange={handleInputChange}
                      disabled={data[0] === "nik"}
                    />
                  ),
              )}
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
          </form>
        ) : (
          <div className="grid grid-cols-12 gap-0">
            {dataPetugas ? (
              Object.entries(dataPetugas).map(
                (data: [string, string | number | null]) =>
                  data[0] === "foto" ? null : (
                    <React.Fragment key={data[0]}>
                      <div className="col-span-4 mt-1 capitalize">
                        {data[0]}
                      </div>
                      <div className="col-span-1 mt-1">:</div>
                      <div className="col-span-7 mt-1">{data[1]}</div>
                    </React.Fragment>
                  ),
              )
            ) : (
              <div>Loading...</div>
            )}
          </div>
        )}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      <BottomNavbar currentPage="home" />
    </DefaultLayout>
  );
}

export default Dashboard;
