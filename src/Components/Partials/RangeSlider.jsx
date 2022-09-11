import React, { useState, useContext, useEffect } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { PriceRangeContent } from "../StateManagement/PriceRangeData";

export const RangeSlider = () => {
  const { PriceRangeData, setPriceRangeData } = useContext(PriceRangeContent);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  useEffect(() => {
    setPriceRangeData([minValue, maxValue]);
    console.log(PriceRangeData);
  }, [minValue, maxValue]);

  return (
    <div className="App">
      <MultiRangeSlider
        min={0}
        max={100}
        step={5}
        ruler={true}
        label={true}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
};
