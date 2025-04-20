import React from "react";
import ProfileCard from "./components/ProfileCard";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-fancy">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#213448] via-[#547792] via-[#94B4C1] via-[#4F959D] via-[#7A73D1] to-[#ECEFCA]"
        style={{ backgroundSize: "400% 400%" }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-80 h-80 bg-pink-400 opacity-20 blur-3xl rounded-full z-0"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-40px] right-[-30px] w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full z-0"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Foreground content */}
      <div className="relative z-10 p-4">
        <ProfileCard />
      </div>
    </div>
  );
}