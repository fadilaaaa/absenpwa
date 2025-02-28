"use client";
import React, { useEffect, useState } from "react";

interface PerintahModalProps {
  onFinish: (location: any, isAnomaly: boolean, isNotMoving: boolean) => void;
}

const PerintahModal: React.FC<PerintahModalProps> = ({ onFinish }) => {
  const [location, setLocation] = useState<any>(null);
  const [lastPosition, setLastPosition] = useState<any>(null);
  const [isAnomaly, setIsAnomaly] = useState<boolean>(false);

  const [scanCount, setScanCount] = useState<number>(0);
  const [notMovingCount, setNotMovingCount] = useState<number>(0);

  const MAX_LAT_DIFF = 0.0001; // Maksimum perubahan latitude wajar (~11m)
  const MAX_LON_DIFF = 0.0001; // Maksimum perubahan longitude wajar (~11m di ekuator)
  const UPDATE_INTERVAL_MS = 1000; // Interval update lokasi (1 detik)
  const MAX_SCAN_COUNT = 5; // Scan selama 5 detik (5 kali dengan interval 1 detik)

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation tidak didukung di browser ini.");
      return;
    }

    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          if (lastPosition) {
            const latDiff = Math.abs(latitude - lastPosition.latitude);
            const lonDiff = Math.abs(longitude - lastPosition.longitude);

            console.log(
              `LatDiff: ${latDiff.toFixed(6)}, LonDiff: ${lonDiff.toFixed(6)}`,
            );

            if (latDiff > MAX_LAT_DIFF || lonDiff > MAX_LON_DIFF) {
              console.warn("⚠️ Deteksi Anomali: Perubahan terlalu besar!");
              setIsAnomaly(true);
            }
            if (
              latitude === lastPosition.latitude &&
              longitude === lastPosition.longitude
            ) {
              setNotMovingCount((prev) => prev + 1);
            }
          }

          setLastPosition({ latitude, longitude });
          setLocation({ latitude, longitude });
          setScanCount((prev) => prev + 1);
        },
        (error) => {
          console.error("Error mendapatkan lokasi:", error.message);
        },
        { enableHighAccuracy: true },
      );
    };

    const intervalId = setInterval(updateLocation, UPDATE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [lastPosition]);

  useEffect(() => {
    if (scanCount >= MAX_SCAN_COUNT) {
      console.log("notMovingCount", notMovingCount);

      onFinish(location, isAnomaly, notMovingCount >= 3);
    }
  }, [scanCount, isAnomaly, location, onFinish]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5">
              <h3 className="text-3xl font-semibold">Perlu Langkah Tambahan</h3>
            </div>
            <div className="relative flex-auto p-6">
              <p className="text-blueGray-500 my-4 text-lg leading-relaxed">
                Silahkan bergerak dari posisi anda sekitar 5-10 langkah
              </p>
              <p className="text-blueGray-500 my-4 text-lg leading-relaxed">
                Silahkan menunggu hingga{" "}
                <span className="text-red-500">
                  {MAX_SCAN_COUNT - scanCount}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerintahModal;
