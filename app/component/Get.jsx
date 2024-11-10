"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import head from "../assets/headText.png";
import Dots from "../assets/dots.svg";

const Card = ({ title, describe, src, className, imgClass, textClass }) => {
  return (
    <div
      className={` card xl:p-8 flex flex-col gap-y-9  xl:gap-y-9 shadow-cardShadow ${className}`}
    >
      <div
        className={`image w-full aspect-square grid place-content-center !relative z-10  ${imgClass}`}
      >
        <Image src={src} alt={src} />
      </div>
      <div className={` text px-2 flex flex-col gap-y-4 ${textClass}`}>
        <h3 className="font-semibold text-[1.75rem] leading-7 ">{title}</h3>
        <p className="font-roboto text-[#88888888]">{describe}</p>
      </div>
    </div>
  );
};

const Get = () => {
  return (
    <div id="get" className=" pt-20 md:pt-32">
      <Container className="flex flex-col gap-y-12 pt-5 font-darkGro">
        <h2 className="text-5xl w-full text-center font-semibold relative">
          See what you will get with us
          <div className="headBg absolute top-0 sm:bottom-1/2 left-1/2 -translate-x-1/2 -z-10 w-full lg:w-3/4 xl:w-2/3">
            <Image src={head} alt={head} className="w-full" />
            <Image
              src={Dots}
              alt={Dots}
              className="absolute top-0 left-1/2 -translate-y-full -translate-x-1/2"
            />
          </div>
        </h2>
        <div className="box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 ">
          <Card
            src={card1}
            title="Development courses"
            describe="Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id."
          />
          <Card
            src={card2}
            title="Development courses"
            describe="Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id."
          />
          <Card
            src={card3}
            imgClass="sm:w-5/12 lg:w-full"
            textClass="sm:w-7/12 lg:w-full"
            className="sm:col-span-2 lg:col-span-1 sm:!flex-row lg:!flex-col items-center gap-x-12"
            title="Development courses"
            describe="Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id."
          />
        </div>
      </Container>
    </div>
  );
};

export default Get;
