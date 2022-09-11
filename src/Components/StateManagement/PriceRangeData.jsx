import { createContext } from "react";
import { useState } from "react";

const PriceRangeContent = createContext();

const PriceRangeWrapper = ({ children }) => {
  const [PriceRangeData, setPriceRangeData] = useState(false);

  return (
    <PriceRangeContent.Provider value={{ PriceRangeData, setPriceRangeData }}>
      {children}
    </PriceRangeContent.Provider>
  );
};

export { PriceRangeContent, PriceRangeWrapper };
