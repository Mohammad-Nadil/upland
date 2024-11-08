"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import BtnCustom from "./BtnCustom";
import Image from "next/image";
import phone from "../assets/phone.png";
import leafBlueLeft from "../assets/leafBlueLeft.png";
import leafBlueRight from "../assets/leafBlueRight.png";
import love from "../assets/love.png";
import mail from "../assets/mail.png";
import tweet from "../assets/tweet.png";
import plane from "../assets/plane.png";
import like from "../assets/like.png";
import comment from "../assets/comment.png";
import pinkLeaf from "../assets/pinkLeaf.png";
import leafRD from "../assets/leaf1.png";
import leafLD from "../assets/leaf2.png";
import leafRU from "../assets/leaf3.png";
import leafLU from "../assets/leaf4.png";
import { delay, motion, useAnimation } from "framer-motion";
import "../globals.css";

const Banner = () => {
  const loveControls = useAnimation();
  const planeControls = useAnimation();
  const likeControls = useAnimation();
  const commentControls = useAnimation();
  const tweetControls = useAnimation();
  const mailControls = useAnimation();
  const leafRUControls = useAnimation();
  const leafLUControls = useAnimation();
  const leafRDControls = useAnimation();
  const leafLDControls = useAnimation();
  const pinkLeafControls = useAnimation();

  let iconAnimation = (controls, xValue, yValue, late) => {
    controls
      .start({
        y: 0,
        x: 0,
        transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
      })
      .then(() => {
        controls.start({
          x: [0, xValue],
          y: [0, yValue],
          transition: {
            duration: 1,
            delay: late,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      });
  };

  let leafAnimation = (controls, angle, time) => {
    controls
      .start({
        y: 0,
        x: 0,
        transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
      })
      .then(() => {
        controls.start({
          rotate: angle,
          transition: {
            duration: 1,
            delay: time,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      });
  };

  useEffect(() => {
    iconAnimation(loveControls, -10, -10, 0);
    iconAnimation(planeControls, -10, -10, 0.2);
    iconAnimation(likeControls, 10, -10, 0.2);
    iconAnimation(commentControls, 10, -10, 0);
    iconAnimation(tweetControls, 10, -10, 0);
    iconAnimation(mailControls, 10, -10, 0.4);
    leafAnimation(leafRUControls, 10, 0);
    leafAnimation(leafLUControls, -10, 0);
    leafAnimation(leafRDControls, 10, 0.4);
    leafAnimation(leafLDControls, -10, 0.8);
    leafAnimation(pinkLeafControls, 10, 0.4);
  }, [
    loveControls,
    planeControls,
    likeControls,
    commentControls,
    tweetControls,
    mailControls,
    leafRUControls,
    leafLUControls,
    leafRDControls,
    leafLDControls,
    pinkLeafControls,
  ]);

  let dots = (
    <svg
      width="16"
      height="6"
      viewBox="0 0 16 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill="#FF6231" />
      <circle cx="13" cy="3" r="3" fill="#FF6231" />
    </svg>
  );
  return (
    <div className="bannerBg overflow-visible">
      <Container className="flex flex-col sm:flex-row gap-x-7 gap-y-5 pt-14 lg:pt-20 xl:pt-28 items-center overflow-visible">
        <motion.div
          className="left sm:w-1/2 flex flex-col gap-y-7"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="topText">
            <p className="flex gap-x-4 font-medium text-xs text-primaryRed items-center">
              {dots}trendy application
            </p>
            <h2 className="font-bold text-white text-5xl md:text-6xl xl:text-7xl">
              work faster with powerful tools
            </h2>
          </div>
          <p className="font-medium lg:text-2xl text-white">
            Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco
            eiusmod officia magna ad id.
          </p>
          <div className="btn">
            <BtnCustom text="Learn more" />
          </div>
        </motion.div>
        <motion.div
          className="right w-full sm:w-1/2 px-5 lg:px-0 overflow-visible"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <div className="overflow-visible relative">
            <div className="aspect-[7/10] relative">
              <div className="phoneMain right-0 absolute w-[90%] h-[90%] z-50">
                <Image
                  className="relative z-50"
                  src={phone}
                  alt="../assets/phone.png"
                />
                <motion.div
                  initial={{ x: -200 }}
                  animate={pinkLeafControls}
                  className="pinkLeaf w-[52.40%] aspect-[243/262] absolute top-[48.82%] left-[65.60%] z-40"
                >
                  <Image src={pinkLeaf} alt="" />
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={leafRUControls}
                  className="leafRU w-[17%] aspect-[6/5] absolute top-[51.62%] left-[73.00%] z-40"
                >
                  <Image src={leafRU} alt="" />
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={leafRDControls}
                  className="leafRD w-[20%] aspect-[158/71] absolute top-[74.76%] left-[72.00%] z-40"
                >
                  <Image src={leafRD} alt="" />
                </motion.div>
                <motion.div
                  initial={{ x: 100 }}
                  animate={leafLUControls}
                  className="leafLU w-[23.00%] aspect-[24/23] absolute top-[59.66%] left-[-8.00%] z-40"
                >
                  <Image src={leafLU} alt="" />
                </motion.div>
                <motion.div
                  initial={{ x: 200 }}
                  animate={leafLDControls}
                  className="leafLD w-[35.00%] aspect-[190/175] absolute top-[62.23%] left-[-23.00%] z-40"
                >
                  <Image src={leafLD} alt="" />
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 100, x: 200 }}
                animate={loveControls}
                className="love w-[7.62%] aspect-square absolute top-[17.15%] left-[12.76%] z-40"
              >
                <Image src={love} alt="../assets/love.png" />
              </motion.div>
              <motion.div
                initial={{ y: 200, x: 100 }}
                animate={planeControls}
                className="plane w-[15.24%] aspect-[9/8] absolute top-[29.49%] left-[13.33%] z-40"
              >
                <Image src={plane} alt="../assets/plane.png" />
              </motion.div>
              <motion.div
                initial={{ y: 100, x: -200 }}
                animate={likeControls}
                className="like w-[9.52%] aspect-square absolute top-[30.84%] left-[100%] z-40"
              >
                <Image src={like} alt="../assets/like.png" />
              </motion.div>
              <motion.div
                initial={{ y: 100, x: -200 }}
                animate={commentControls}
                className="comment w-[15.24%] aspect-[7/8] absolute top-[15%] left-[111.62%] z-40"
              >
                <Image src={comment} alt="../assets/comment.png" />
              </motion.div>
              <motion.div
                initial={{ y: 50, x: -300 }}
                animate={tweetControls}
                className="tweet w-[11.43%] aspect-square absolute top-[48.26%] left-[108.95%] z-40 "
              >
                <Image src={tweet} alt="../assets/tweet.png" />
              </motion.div>
              <motion.div
                initial={{ y: 50, x: -400 }}
                animate={mailControls}
                className="mail w-[12.38%] aspect-square absolute top-[66.62%] left-[112.38%]  z-40"
              >
                <Image src={mail} alt="../assets/mail.png" />
              </motion.div>
              <motion.div className="LBLeft w-[37.33%] aspect-[75/49] absolute top-[28.55%] left-[-9.52%]">
                <Image src={leafBlueLeft} alt="../assets/leafBlueLeft.png" />
              </motion.div>
              <motion.div className="LBRight w-[72.38%] aspect-[47/38] absolute top-[15.42%] left-[61.33%]">
                <Image src={leafBlueRight} alt="../assets/leafBlueRight.png" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Banner;
