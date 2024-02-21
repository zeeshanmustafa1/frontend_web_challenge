// components/TextLengthSlider.js
import React from "react";
import { Slider, Typography } from "@mui/material";

interface TextLengthSliderProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

const TextLengthSlider: React.FC<TextLengthSliderProps> = ({ value, onChange }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Typography
        id="text-length-slider"
        variant="h5"
        className="text-white"
        gutterBottom
      >
        Set the number of words for output text.: {value} words
      </Typography>
      <div
        style={{
          height: "53px",
          width: "23%",
          backgroundColor: "#09090D",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        <Slider
          value={value}
          onChange={onChange}
          aria-labelledby="text-length-slider"
          valueLabelDisplay="auto"
          min={100}
          max={1000}
          step={100}
        />
      </div>
    </div>
  );
};

export default TextLengthSlider;
