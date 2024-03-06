"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="p-20 text-5xl">
          Welcome to my Clerk demo application
        </motion.h1>
      </div>
      <motion.gallery className="flex justify-center space-x-20 p-20 m-10 ">
        <Image src={"/img1.jpg"} alt="Ghibli film" width={400} height={200} className="border-4 border-white" />
        <Image src={"/img2.jpg"} alt="Ghibli film" width={400} height={200} className="border-4 border-white" />
        <Image src={"/img3.jpg"} alt="Ghibli film" width={400} height={200} className="border-4 border-white" />
      </motion.gallery>
    </>
  );
}
