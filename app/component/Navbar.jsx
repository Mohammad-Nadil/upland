"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Container from "./Container";
import Link from "next/link";
import { CiMobile2 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const Dots = () => {
  return <GoDotFill className="h-1 w-1 text-[#9B9FD3] hidden lg:flex " />;
};

const Navbar = () => {
  const liVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 300 },
    hover: { scale: 1.25 },
  };

  let [show , setShow] = useState(false)

  return (
    <motion.nav
      className=" w-full absolute xl:top-6 2xl:top-12 z-50 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="max-w-[1792px] py-1 flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="../assets/logo.png" />
          </Link>
        </div>
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="visible"
          className={` absolute lg:static lg:!opacity-100 flex flex-col lg:flex-row gap-x-3 xl:gap-x-7 items-end lg:items-center gap-y-3  right-0 top-[120%] z-[99999] bg-blue-600 lg:bg-transparent p-4 mr-3 rounded-2xl duration-300 lg:visible  ${show ? " !opacity-100 visible ":" !opacity-0 invisible "}`}
        >
          <motion.li
            className=" text-white "
            variants={liVariants}
            whileHover={{ scale: 1.25 }}
          >
            <Link href={""}>Features</Link>
          </motion.li>
          <Dots />
          <motion.li
            className=" text-white"
            variants={liVariants}
            whileHover={{ scale: 1.25 }}
          >
            <Link href={""}>Download app</Link>
          </motion.li>
          <Dots />
          <motion.li
            className=" text-white"
            variants={liVariants}
            whileHover={{ scale: 1.25 }}
          >
            <Link href={""}>UI screens</Link>
          </motion.li>
          <Dots />
          <motion.li
            className=" text-white"
            variants={liVariants}
            whileHover={{ scale: 1.25 }}
          >
            <Link href={""}>Testimonials</Link>
          </motion.li>
          <Dots />
          <motion.li
            className=" text-white"
            variants={liVariants}
            whileHover={{ scale: 1.5 }}
          >
            <Link href={""}>FAQ</Link>
          </motion.li>
          <Dots />
          <motion.li variants={liVariants}>
            <Link href={""}>
              <motion.button
                className="py-1 px-5 rounded-full border border-primaryRed text-primaryRed font-medium"
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Free trial
              </motion.button>
            </Link>
          </motion.li>
          <div className="num flex gap-x-1.5 lg:hidden">
            <CiMobile2 className="h-6 w-6  text-primaryRed" />
            <p className="text-white text-lg font-medium">
              <Link href="tel:+1 742 65 84 122">+1 742 65 84 122</Link>
            </p>
          </div>
        </motion.ul>
        <div className="num hidden lg:flex items-center gap-x-1.5">
          <CiMobile2 className="h-6 w-6  text-primaryRed" />
          <p className="text-white text-lg font-medium">
            <Link href="tel:+1 742 65 84 122">+1 742 65 84 122</Link>
          </p>
        </div>
        <div onClick={()=>setShow(!show)} className="smallDevice lg:hidden">
          <IoMenu className="text-4xl" />
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
