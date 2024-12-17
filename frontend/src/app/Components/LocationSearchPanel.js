import React from "react";
import PropTypes from "prop-types";

const LocationSearchPanel = ({
  suggestions = [], // Default value to prevent undefined
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  // Handle click on a suggestion
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }

    // Close panel and show vehicle panel on suggestion click
    // setVehiclePanel(true);
    // setPanelOpen(false);
  };

  return (
    <div>
      {/* Conditional check for empty suggestions */}
      {suggestions?.length > 0 ? (
        suggestions.map((location, index) => (
          <div
            key={index} // Unique key for each suggestion
            onClick={() => handleSuggestionClick(location)}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer hover:bg-gray-100" // Added hover effect
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        ))
      ) : (
        // Fallback when no suggestions are available
        <p className="text-gray-500 text-center py-4">No suggestions available</p>
      )}
    </div>
  );
};

// Adding prop types for better type safety
LocationSearchPanel.propTypes = {
  suggestions: PropTypes.array,
  setVehiclePanel: PropTypes.func.isRequired,
  setPanelOpen: PropTypes.func.isRequired,
  setPickup: PropTypes.func.isRequired,
  setDestination: PropTypes.func.isRequired,
  activeField: PropTypes.string.isRequired,
};

export default LocationSearchPanel;
