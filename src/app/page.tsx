"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/navigation";
import Head from "next/head";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Home() {
  const router = useRouter();
  router.push("/login");
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/icon/favicon.ico" />
      </Head>
    </>
  );
}
