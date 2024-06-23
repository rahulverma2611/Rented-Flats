import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [rent, setRent] = useState("");
  const [apartmentType, setApartmentType] = useState("");

  const handleFilter = () => {
    onFilter({ rent, apartmentType });
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex gap-4">
        <div>
          <label className="block mb-2">Rent:</label>
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="p-2 border border-gray-300"
            placeholder="Enter max rent"
          />
        </div>
        <div>
          <label className="block mb-2">Flat Type:</label>
          <input
            type="text"
            value={apartmentType}
            onChange={(e) => setApartmentType(e.target.value)}
            className="p-2 border border-gray-300"
            placeholder="Enter flat type"
          />
        </div>
      </div>
      <button
        onClick={handleFilter}
        className="p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
