"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Camera from "react-webcam";
import Swal from "sweetalert2";

function Presensi() {
  const webcamRef = useRef<Camera>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current
      ? webcamRef.current.getScreenshot()
      : null;
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Presensi Berhasil",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <DefaultLayout title="Presensi">
      <div className="mt-2 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Camera height={300} width={300} ref={webcamRef} />
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
            <button
              className="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white"
              onClick={capture}
            >
              Capture
            </button>
          )}
        </div>
      </div>
      <BottomNavbar currentPage="presensi" />
    </DefaultLayout>
  );
}

export default Presensi;
