import React from "react";
import { Link } from "react-router";

const Plant = ({ singlePlant }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl ">
      <div className="p-8">
        <img
          className="w-[164px] h-[150px] mx-auto bg-white"
          src={singlePlant.image}
        />
        <p className="my-4 font-bold text-[25px] text-center">
          {singlePlant.plantName}
        </p>
        <div className="flex justify-between items-end ">
          <div className="flex-row justify-between items-center text-[18px] font-bold  text-nowrap ">
            <p>
              Category :{" "}
              <span className="font-semibold">{singlePlant.category}</span>
            </p>
            <p>
              Price :{" "}
              <span className="font-semibold">{singlePlant.price} USD</span>
            </p>
            <p>
              Rating :{" "}
              <span className="font-semibold">{singlePlant.rating}</span>
            </p>
          </div>
          <div>
            <Link to={`/plantDetails/${singlePlant.id}`}>
              <button className="btn text-nowrap bg-green-600 text-white font-semibold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
