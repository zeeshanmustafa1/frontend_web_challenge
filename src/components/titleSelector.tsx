import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select, SelectChangeEvent,
  Typography,
} from "@mui/material";
import {theme} from "@/constants/color";
import {ThemeProvider} from "@mui/material/styles";

const TitleSelector = ({titles, selectedTopic}) => {
  const [selectValue, setSelectValue] = React.useState(selectedTopic);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{marginTop: "30px"}}>
        <Typography variant="h5" className="text-white pt-4">
          Which type of “{selectedTopic}” content do you want to create?
        </Typography>
        <FormControl style={{marginTop: "30px", width: "26%"}}>
          <InputLabel id="title-select-label" className="text-white">
            {selectedTopic}
          </InputLabel>
          <Select
            labelId="title-select-label"
            id="title-select"
            style={{
              borderRadius: "16px",
              color: "white",
              backgroundColor: "rgba(58, 57, 64, 1)",
            }}
            value={selectValue}
            onChange={handleChange}
            label="Select"
          >
            {titles.map((title) => (
              <MenuItem
                key={title} value={title}
                style={{
                  color: "white",
                  backgroundColor: "rgba(58, 57, 64, 1)",
                  padding: "8px",
                }}
              >
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default TitleSelector;
