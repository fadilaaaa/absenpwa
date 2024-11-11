"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Cuti() {
  const [startDate, setStartDate] = useState<any>(null);
  return (
    <DefaultLayout title="Pengajuan Cuti">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Tanggal
            </label>
            <DatePicker
              className="w-full rounded-lg border-[1.5px] border-stroke px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              selected={startDate}
              placeholderText="Select date"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Jenis Pengajuan
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                value=""
                className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              >
                <option value="">Pilih Jenis Pengajuan</option>
                <option value="cuti">Cuti</option>
                <option value="sakit">Sakit</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Keterangan
            </label>
            <textarea
              rows={6}
              placeholder="Tulis keterangan disini"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
            ></textarea>
          </div>
          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Ajukan
          </button>
        </div>
      </div>

      <BottomNavbar currentPage="cuti" />
    </DefaultLayout>
  );
}

export default Cuti;
