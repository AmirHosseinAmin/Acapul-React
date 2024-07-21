import React from "react";
import { RecentProductSection } from "../Recent-Product-Section/recentProductSection";
import { FreeProductSection } from "../Free-Product-Section/freeProductSection";
const ProductSection = () => {
  return (
    <div>
      <div className="w-full bg-white">
        <FreeProductSection />
        <RecentProductSection />
      </div>
    </div>
  );
};

export default ProductSection;
