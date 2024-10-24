import { useRouter } from "next/navigation";
import React from "react";

function BottomNavbar(props: { currentPage: string }) {
  const router = useRouter();
  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };
  return (
    <div className="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto grid h-full max-w-lg grid-cols-5">
        <button
          onClick={() => handleNavigate("dashboard")}
          data-tooltip-target="tooltip-home"
          type="button"
          className="group inline-flex flex-col items-center justify-center rounded-s-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className={`${props.currentPage === "home" ? "text-blue-600" : "text-gray-500"} mb-0 h-5 w-5 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => handleNavigate("gaji")}
          data-tooltip-target="tooltip-wallet"
          type="button"
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className={`${props.currentPage === "gaji" ? "text-blue-600" : "text-gray-500"} mb-0 h-5 w-5 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>
          <span className="text-xs">Gaji</span>
        </button>

        <div className="flex items-center justify-center">
          <button
            onClick={() => handleNavigate("presensi")}
            data-tooltip-target="tooltip-new"
            type="button"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <img
              className="h-7= w-7 text-white"
              src="/images/icon/qrcode.svg"
              alt="Presensi"
            />
            <span className="sr-only">Presensi</span>
          </button>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Create Presensi
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          onClick={() => handleNavigate("cuti")}
          data-tooltip-target="tooltip-settings"
          type="button"
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className={`${props.currentPage === "cuti" ? "text-blue-600" : "text-gray-500"} mb-0 h-5 w-5 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
          <span className="text-xs">Cuti</span>
        </button>

        <button
          onClick={() => handleNavigate("pengaduan")}
          data-tooltip-target="tooltip-profile"
          type="button"
          className="group inline-flex flex-col items-center justify-center rounded-e-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className={`${props.currentPage === "pengaduan" ? "text-blue-600" : "text-gray-500"} mb-0 h-5 w-5 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <span className="text-xs">Pengaduan</span>
        </button>
      </div>
    </div>
  );
}

export default BottomNavbar;
