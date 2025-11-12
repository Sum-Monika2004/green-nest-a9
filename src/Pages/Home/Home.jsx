import React from "react";
import Hero from "../../Components/Hero/Hero";
import { useLoaderData } from "react-router";
import AllPlants from "../../Components/AllPlants/AllPlants";

import waterImg from "../../assets/watering.png";
import sunImg from "../../assets/sun.png";
import fertiImg from "../../assets/ferti.png";
import pic from "../../assets/pic.png";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero data={data}></Hero>
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl text-center mb-15">
          Top Rated Indoor Plants
        </h1>
        <AllPlants data={data}></AllPlants>
      </div>

      {/* Plant care Tips  */}
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl text-center mb-15">
          Plant Care Tips
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-evenly ">
          {/* card */}
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <img className="w-[50px] h-[50px]" src={waterImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Watering</h2>
                <p>Keep the soil moist but not soggy.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <img className="w-[50px] h-[50px]" src={sunImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Sunlight</h2>
                <p>Place near a window with indirect light.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <img className="w-[50px] h-[50px]" src={fertiImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Fertilizing</h2>
                <p>Feed monthly with a balanced fertilizer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experts  */}
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl text-center mb-15">
          Meet Our Green Experts
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-evenly  mb-20">
          {/* card */}
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between  items-start p-10 gap-3">
              <div>
                <img
                  className="w-[55px] h-[30px] object-cover "
                  src={pic}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Ave melisa</h2>
                <h1 className="text-[18px] font-semibold mb-1">Plant Care</h1>
                <p className="text-gray-400">
                  Have expertise in plant care and is passionate about helping
                  plants thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between  items-start p-10 gap-3">
              <div>
                <img
                  className="w-[55px] h-[30px] object-cover "
                  src={pic}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">John dalton</h2>
                <h1 className="text-[18px] font-semibold mb-1">Plant Care</h1>
                <p className="text-gray-400">
                  Have expertise in plant care and is passionate about helping
                  plants thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between  items-start p-10 gap-3">
              <div>
                <img
                  className="w-[55px] h-[30px] object-cover  "
                  src={pic}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Nurul huda</h2>
                <h1 className="text-[18px] font-semibold mb-1">Plant Care</h1>
                <p className="text-gray-400">
                  Have expertise in plant care and is passionate about helping
                  plants thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
