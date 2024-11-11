"use client";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, useRef, useEffect } from "react";
import { Camera, CameraType } from "react-camera-pro";

function Presensi() {
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState<string | null>(null);
  const [showImage, setShowImage] = useState<boolean>(false);
  const camera = useRef<CameraType>(null);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [activeDeviceId, setActiveDeviceId] = useState<string | undefined>(
    undefined,
  );
  const [torchToggled, setTorchToggled] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((i) => i.kind == "videoinput");
      setDevices(videoDevices);
    })();
  });

  return (
    <DefaultLayout title="Presensi">
      <div className="mt-2 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
        <Camera
          ref={camera}
          aspectRatio="cover"
          facingMode="environment"
          numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
          videoSourceDeviceId={activeDeviceId}
          errorMessages={{
            noCameraAccessible:
              "No camera device accessible. Please connect your camera or try a different browser.",
            permissionDenied:
              "Permission denied. Please refresh and give camera permission.",
            switchCamera:
              "It is not possible to switch camera to different one because there is only one video device accessible.",
            canvas: "Canvas is not supported.",
          }}
          videoReadyCallback={() => {
            console.log("Video feed ready.");
          }}
        />
      </div>

      <BottomNavbar currentPage="presensi" />
    </DefaultLayout>
  );
}

export default Presensi;
