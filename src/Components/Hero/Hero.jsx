import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className=" bg-green-50">
      <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row  justify-between items-center p-15 gap-40">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-6 text-green-900 leading-tight ">
            GreenNest - <br /> Indoor Plant Care & Store
          </h1>
          <p className="text-xl text-gray-400">
            GreenNest is built for plant lovers who want to nurture and decorate
            their homes with healthy indoor plants. The platform allows users to
            explore plant care guides, buy plants, and book expert consultations
            — ensuring a greener and healthier living space during any season.
          </p>
        </div>
        <div>
          <img className=" flex-1 mx-auto" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
