import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ApartmentOutlined,
  HomeOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import ContactModal from "./contact-modal";
import Filter from "./filter";
// import Filter from "./Filter";

const FlatDetails = () => {
  const [flatData, setFlatData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/data").then((response) => {
      setFlatData(response.data);
      setFilteredData(response.data); // Initialize filtered data
    });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleFilter = ({ rent, apartmentType }) => {
    const filtered = flatData.filter((item) => {
      return (
        (rent ? item.rent <= rent : true) &&
        (apartmentType ? item.apartmentType.includes(apartmentType) : true)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-row gap-4">
      {/* <Filter onFilter={handleFilter} /> */}
      <div className="w-[35%]">
        {" "}
        <Filter onFilter={handleFilter} />{" "}
      </div>
      <div className="flex flex-col gap-4 w-[65%]">
        {" "}
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex flex-row gap-5 px-5 py-5 bg-slate-100"
          >
            <div className="w-[40%]">
              <img src={item.images} className="w-[100%] h-[200px] contain" />
            </div>
            <div className="w-[60%] flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className="w-[50%] py-6 border">
                  <ApartmentOutlined className="text-2xl" /> Furnishing type:{" "}
                  {item.furnished}
                </div>
                <div className="w-[50%] py-6 border">
                  <HomeOutlined className="text-2xl" /> Flat type:{" "}
                  {item.apartmentType}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[50%] py-6 border">
                  <DollarOutlined className="text-2xl" /> Rent: {item.rent}
                </div>
                <button
                  onClick={showModal}
                  type="button"
                  className="text-white w-[50%] py-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                  Contact the Owner
                </button>
              </div>
            </div>
            <ContactModal visible={isModalVisible} onClose={handleClose} />
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default FlatDetails;
