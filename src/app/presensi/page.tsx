"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Camera from "react-webcam";
import Swal from "sweetalert2";

import PerintahModal from "./perintahModal";
import { set } from "react-datepicker/dist/date_utils";
import { useRouter } from "next/navigation";

function Presensi() {
  const router = useRouter();
  const webcamRef = useRef<Camera>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current
      ? webcamRef.current.getScreenshot()
      : null;
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const onFinish = (
    location: any,
    isAnomaly: boolean,
    isNotMoving: boolean,
  ) => {
    if (isAnomaly) {
      Swal.fire({
        title: "Presensi Gagal",
        text: "Terjadi kesalahan pada proses presensi",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else if (isNotMoving) {
      Swal.fire({
        title: "Presensi Gagal",
        text: "Anda tidak bergerak selama presensi",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Presensi Berhasil",
        text: "Terima kasih telah melakukan presensi",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
    setShowModal(false);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("location", !navigator.geolocation);
      Swal.fire({
        title: "Geolocation tidak didukung",
        text: "Geolocation tidak didukung di perangkat ini",
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/");
      });
    }
  }, []);

  return (
    <DefaultLayout title="Presensi">
      {showModal && <PerintahModal onFinish={onFinish} />}
      <div className="mt-2 min-h-max max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Camera height={500} width={300} ref={webcamRef} />
        )}
        <div className="text-center">
          {imgSrc ? (
            <span>
              <button
                className="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white"
                onClick={capture}
              >
                Retake
              </button>
              <button
                onClick={handleSubmit}
                className="ml-2 mt-5 inline-flex items-center rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-medium text-white"
              >
                Submit
              </button>
            </span>
          ) : (
            <>
              <button
                className="mt-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white"
                onClick={capture}
              >
                Capture
              </button>
            </>
          )}
        </div>
      </div>
      <BottomNavbar currentPage="presensi" />
    </DefaultLayout>
  );
}

export default Presensi;
