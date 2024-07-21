import React, { useState } from 'react';
import Draggable from 'react-draggable';

const FilterProductPrice = ({ onFilterChange }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    const { x } = ui;
    setPosition({ x, y: 0 });
    const percentage = (x / window.innerWidth) * 100; // Adjust the denominator based on your layout
    onFilterChange(percentage);
  };

  return (
    <Draggable axis="x" bounds="parent" position={position} onDrag={handleDrag}>
      <div className="w-10 h-10 bg-blue-500 rounded-full cursor-move hover:cursor-grab hover:bg-blue-600 active:cursor-grabbing shadow-md"></div>
    </Draggable>
  );
};

export default FilterProductPrice;
