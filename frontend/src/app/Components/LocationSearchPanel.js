import React from "react";

const LocationSearchPanel = ({ setVehiclePanel, setPickup, setPanelOpen }) => {
  // Array of locations
  const locations = [
    "124A, Sardar Patel Colony, NaranPura, Ahmedabad",
    "567B, Shree Nagar Society, Navrangpura, Ahmedabad",
    "890C, Ashram Road, Ellisbridge, Ahmedabad",
  ];

  return (
    <div>
      {/* Map over the locations array */}
      {locations.map((location, index) => (
        <div
          onClick={() => {
            setPickup(location); // Update the pickup location
            setPanelOpen(false); // Close location search panel
            setVehiclePanel(true); // Show vehicle options panel
          }}
          key={index} // Add a unique key for each item
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
