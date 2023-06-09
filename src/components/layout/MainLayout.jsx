import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/header/Navbar";
import DarkLayout from "./DarkLayout";

const inter = Inter({ subsets: ["latin"] });

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${"main"} ${inter.className}`}>
        <DarkLayout>{children}</DarkLayout>
      </main>
    </>
  );
}

export default MainLayout;
