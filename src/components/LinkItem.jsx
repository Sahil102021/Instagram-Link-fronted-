// src/components/LinkItem.jsx
import React from "react";
import { motion } from "framer-motion";

const LinkItem = ({ href, label, color, Icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 py-3 px-6 rounded-full ${color} text-white font-medium shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
      whileHover={{ scale: 1.05 }}
    >
      {Icon && <Icon className="text-xl" />}<span>{label}</span>
    </motion.a>
  );
};

export default LinkItem;
