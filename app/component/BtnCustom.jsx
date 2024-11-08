"use client";
import React from "react";
import { motion } from "framer-motion";

const BtnCustom = ({text, className}) => {
  return (
    <motion.button className={`bg-gradient-to-r from-primaryRed to-[#FFA979FD] rounded-full text-white font-medium py-3 lg:py-4 px-5 md:px-7 lg:px-9 ${className}`} 
    whileHover={{scale:1.15}}
    transition={{type:"spring" , stiffness:300 , }}>
        {text}
    </motion.button>
  );
};

export default BtnCustom;
