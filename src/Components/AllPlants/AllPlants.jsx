import React, { Suspense } from "react";
import Plant from "../Plant/Plant";

const AllPlants = ({ data }) => {
  return (
    <div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          {data.map((singlePlant) => (
            <Plant key={singlePlant.id} singlePlant={singlePlant}></Plant>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllPlants;
