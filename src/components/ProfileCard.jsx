import React from "react";
import { motion } from "framer-motion";
import LinkItem from "./LinkItem";
import SocialIcons from "./SocialIcons";
import logo from "../assets/logo.png";
import { FaGlobe, FaShoppingCart, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ProfileCard = () => {
  return (
    <motion.div
      className="backdrop-blur-lg bg-glass p-8 rounded-2xl shadow-2xl text-white max-w-md w-full text-center border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <h1 className="text-3xl font-bold mb-2 tracking-wide">
        Riya Art Infotech
      </h1>
      <p className="text-sm text-gray-200 mb-6 italic">
        Helping businesses grow with reliable websites, smart applications, and
        modern digital solutions.
      </p>

      <div className="space-y-4">
        <LinkItem
          label="Riya Art Infotech"
          href="https://riya-art-infotech-front.vercel.app/"
          color="bg-[#4243c2]"
          Icon={FaGlobe}
        />
        {/* <LinkItem label="linkedin" href="https://www.linkedin.com/company/riya-art-infotech" color="bg-[#0077B5]" Icon={FaShoppingCart} /> */}
        <LinkItem
          label="Mail"
          href="mailto:riyaartinfotech@gmail.com"
          color="bg-blue-500"
          Icon={IoIosMail}
        />
        <LinkItem
          label="Whatsapp "
          href="https://wa.me/8155083855"
          color="bg-green-500"
          Icon={FaWhatsapp}
        />
      </div>

      <div className="my-6 border-t border-white/20" />

      <SocialIcons />
    </motion.div>
  );
};

export default ProfileCard;
