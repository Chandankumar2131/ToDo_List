import React from "react";

const ClearAllButton = ({ onClearAll }) => {
  return (
    <section>
      <button className="deleteAll" onClick={onClearAll}>
        Clear All
      </button>
    </section>
  );
};

export default ClearAllButton;