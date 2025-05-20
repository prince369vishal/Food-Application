import React from "react";
import { BikeDelivery } from "../Assets";
import { motion } from "framer-motion";
const Left = () => {
  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-indigo-100 px-4 py-1 rounded-full">
        <p className="text-base text-indigo-600 font-bold">Express Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        Food Delivery
        <span className="text-indigo-600 text-[2.5rem] lg:text-[4.6rem]">
          {" "}
          Application
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Experience the perfect blend of authentic flavors and modern culinary
        artistry. Our master chefs craft each dish with passion, using the
        finest ingredients to create unforgettable dining moments. From
        traditional favorites to innovative creations, every bite tells a story.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white"
      >
        Explore Menu
      </motion.button>
    </div>
  );
};

export default Left;
