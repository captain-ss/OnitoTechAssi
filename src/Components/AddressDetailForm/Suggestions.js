import React from "react";
import "../../CSS/Suggestions.css";
const Suggestions = ({ country, handleClose }) => {
  return (
    <div className="SuggetionsContainer">
      {country?.map((item, idx) => {
        return (
          <span
            onClick={() => {
              handleClose(item?.name.common);
            }}
          >
            {item?.name.common}
          </span>
        );
      })}
    </div>
  );
};

export default Suggestions;
