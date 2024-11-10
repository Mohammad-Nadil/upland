import React from "react";
import Container from "./Container";
import Image from "next/image";
import headBg from "../assets/appHead.png";
import dots from "../assets/dots.svg";
import right from "../assets/appImage.png";
import { FaRegCheckCircle } from "react-icons/fa";

const Li = ({ text }) => {
  return (
    <li className=" flex gap-x-5 text-sm lg:text-base">
      <div className="icon text-primaryRed text-xl">
        <FaRegCheckCircle />
      </div>
      <p className="font-roboto text-secondary">{text}</p>
    </li>
  );
};

const PopularApp = () => {
  return (
    <div id="app ">
      <Container className="pt-28 md:pt-40 flex gap-x-5 lg:gap-x-0 items-center">
        <div className="left hidden sm:flex w-1/2">
          <div className="image w-full aspect-square">
            <Image src={right} alt={right} />
          </div>
        </div>
        <div className="right lg:pl-16 sm:w-1/2 font-darkGro flex flex-col gap-y-7">
          <div className="head relative">
            <h2 className=" font-semibold text-[3.125rem] leading-[3.125rem]">
              The most popular application 2021
            </h2>
            <Image className="absolute top-0" src={headBg} alt={headBg} />
            
            <Image className="absolute top-0 -translate-y-full" src={dots} alt={dots} />
          </div>
          <p className="font-medium text-2xl lg:text-[28px] lg:leading-7 text-secondary">
            Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
            dolore ipsum.
          </p>
          <ul className="flex flex-col gap-y-5" >
            <Li text="Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit." />
            <Li text="Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. " />
            <Li text="Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id." />
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default PopularApp;
