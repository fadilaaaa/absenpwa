"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import useLocalStorage from "@/hooks/useLocalStorage";
import global from "@/lib/global";
import React, { useEffect, useState } from "react";
interface GajiData {
  bulan: string;
  gaji: string;
  tahun: string;
  absen: number;
  telat: number;
  izin: number;
}
function Gaji() {
  const [dataGaji, setDataGaji] = useState<any>(null);
  const token = useLocalStorage("token", "");
  useEffect(() => {
    fetch(`${global.api_url}/api/petugas/gaji`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);

        const userData = data.data
          .map(
            (item: {
              bulan: string;
              gaji: string;
              tahun: string;
              absen: number;
              telat: number;
              izin: number;
            }) => {
              return {
                bulan: item.bulan,
                gaji: item.gaji,
                tahun: item.tahun,
                absen: item.absen,
                telat: item.telat,
                izin: item.izin,
              };
            },
          )
          .catch((error: any) => {
            console.error("Error:", error);
          });
        setDataGaji(userData);
      });
  }, []);

  return (
    <DefaultLayout title="Gaji">
      <div className="container mx-auto">
        <div className="grid grid-cols-3  gap-2">
          <select
            // value={monthFilter}
            // onChange={handleMonthFilterChange}
            className=" rounded border border-gray-300 p-2"
          >
            <option value="">All Months</option>
            <option value="Januari">Januari</option>
            <option value="Februari">Februari</option>
            <option value="Maret">Maret</option>
            <option value="April">April</option>
          </select>
          <select
            // value={yearFilter}
            // onChange={handleYearFilterChange}
            className=" rounded border border-gray-300 p-2"
          >
            <option value="">All Years</option>
            <option value="2024">2024</option>
          </select>
          {/* // add reset filter */}
          <button
            // onClick={resetFilter}
            className=" rounded border border-gray-300 p-2"
          >
            {" "}
            Reset Filter{" "}
          </button>
        </div>
        <div className="mt-2 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
          {dataGaji ? (
            dataGaji.map((gaji: GajiData, index: React.Key) => (
              <label key={index}>
                <input
                  className="peer/showLabel absolute scale-0"
                  type="checkbox"
                />
                <span className="block max-h-14 max-w-xs overflow-hidden rounded-lg  bg-slate-100 px-4 py-0 text-cyan-800  transition-all duration-300 peer-checked/showLabel:max-h-52">
                  <h3 className="flex h-14 cursor-pointer items-center font-bold">
                    {/* {"<"} */}
                    {gaji.bulan} {gaji.tahun}
                    <span className="ml-auto">{gaji.gaji}</span>
                  </h3>
                  <p className="mb-2">
                    Gaji: {gaji.gaji} <br />
                    <br />
                    Absen: {gaji.absen} <br />
                    Telat: {gaji.telat} <br />
                    Izin: {gaji.izin} <br />
                  </p>
                </span>
              </label>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <BottomNavbar currentPage="gaji" />
    </DefaultLayout>
  );
}

export default Gaji;
