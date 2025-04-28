import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaUpwork } from "react-icons/fa6";

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/riyaart_infotech/",
    color: "hover:text-pink-400",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/riya-art-infotech",
    color: "hover:text-blue-600",
  },
  {
    icon: FaBehance,
    href: "https://www.behance.net/riya_art_infotech",
    color: "hover:text-indigo-400",
  },
  {
    icon: FaUpwork,
    href: "https://www.upwork.com/freelancers/~017f6ec0d8ce3236fb?mp_source=share",
    color: "hover:text-black",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-5">
      {socials.map(({ icon: Icon, href, color }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl text-white transition-colors duration-300 ${color}`}
          whileHover={{ scale: 1.2 }}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
