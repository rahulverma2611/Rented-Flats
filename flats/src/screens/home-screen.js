import React from "react";
import Navbar from "../components/navbar";
import FlatDetails from "../components/flat-details";
// import Filter from "./components/filter";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />

      <div className="flex lg:flex-row ">
        {/* <div className="lg:w-[35%] border border-red-800"></div> */}
        <div className="lg:w-[100%] border border-yellow-800">
          <FlatDetails />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
