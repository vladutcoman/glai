import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto pt-24">
        <div className="px-4">
          <h1 className="text-3xl font-bold text-red-500">Hello World</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
