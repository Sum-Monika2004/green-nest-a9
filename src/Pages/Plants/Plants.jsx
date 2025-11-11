import React, { Suspense } from "react";

import { useLoaderData } from "react-router";
import AllPlants from "../../Components/AllPlants/AllPlants";

const Plants = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="font-bold text-5xl text-center my-15">All plants</h1>

      <div className="mb-20 w-11/12 mx-auto">
        <AllPlants data={data}></AllPlants>
      </div>
    </div>
  );
};

export default Plants;
