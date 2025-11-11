import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

import starImg from "../../assets/icon-ratings.png";
import dollarImg from "../../assets/dollar.png";
import availableImg from "../../assets/available.png";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { id } = useParams();
  const plantId = id;
  const data = useLoaderData();

  const singleP = data.find((plant) => plant.id === plantId);
  console.log(singleP);

  const { image, plantName, rating, availableStock, price, description } =
    singleP;

  const [isBooked, setIsBooked] = useState(false);

  const handleBookNow = (e) => {
    e.preventDefault();
    toast("Booked");
    setIsBooked(true);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto mt-20 mb-20">
        {/* card */}
        <div className="bg-white rounded-md shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-20 p-10">
            <div>
              <img
                className="w-[164px] h-[150px] mx-auto bg-white"
                src={image}
              />
            </div>
            <div>
              <div>
                <h1 className="text-2xl font-semibold mb-4">{plantName}</h1>
                <p className="max-w-[500px] text-gray-400 mb-4">
                  {description}
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                  <img className="w-7 h-7" src={availableImg} alt="" />
                  <h1 className="text-gray-500 font-semibold">
                    {availableStock}
                  </h1>
                </div>
                <div className="flex gap-2 items-center ">
                  <img className="w-5 h-5" src={starImg} />
                  <h1 className="text-orange-500 font-semibold">{rating}</h1>
                </div>
                <div className="flex gap-2 items-center ">
                  <img className="w-5 h-5" src={dollarImg} alt="" />
                  <h1 className="text-green-500 font-semibold">$ {price}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isBooked === false ? (
          <div>
            <div className="font-semibold text-4xl mt-10 ml-11">
              Book Consultation
            </div>
            <div className="mx-auto w-11/12 mt-5">
              <form
                className="max-w-[600px] space-y-4 bg-white rounded-md shadow-sm p-8 "
                onSubmit={handleBookNow}
              >
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="border-1 border-gray-300 rounded-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                    className="border-1 border-gray-300 rounded-sm p-2"
                  />
                </div>

                <button className="btn">Book Now</button>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PlantDetails;
