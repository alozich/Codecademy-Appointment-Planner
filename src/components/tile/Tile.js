import React from "react";

export const Tile = ({name, description}) => {

  
  return (
    <div >
      <p className="tile-title">{name}</p>

      {Object.entries(description).map(([key, value]) => (
        <p key={key} className="tile">
          <strong>{key}:</strong> {value}
        </p>
      ))}

    </div>
  );
};
