// components/TopicSelector.js
import React from "react";
import { IconButton, Button, Typography, Divider } from "@mui/material";

const topics = ["Fun", "Education", "Sports", "News", "Investment", "Facts"];
const contentType = {
  width: "1376px",
  height: "126px",
  top: "141px",
  left: "32px",
  border: "1px",
  color: "white",
  paddingTop: "40px",
};

const heading = {
  fontFamily: "Poppins",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "36px",
  letterSpacing: "0em",
  textAlign: "left",
};

const button = {
  width: "81px",
  height: "42px",
  borderRadius: "20px",
  border: "1px solid grey",
  color: "white",
};

const TopicSelector = ({ selectedTopic, onSelectTopic }) => {
  return (
    <div>
      <div style={contentType}>
        <Typography variant="h5" className="text-white">
          Content Type
        </Typography>
        <Typography variant="body1">
          Choose a content type that best fits your needs.
        </Typography>
      </div>
      <Divider className="mt-3" />
      <div>
        <Typography variant="h5" className="text-white pt-4">
          What type of content are you creating?
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {topics.map((topic) => (
            <IconButton
              key={topic}
              variant={selectedTopic === topic ? "contained" : "outlined"}
              style={{
                width: "auto",
                height: "42px",
                borderRadius: "20px",
                border: "1px solid grey",
                padding: "20px",
                color: "white",
                backgroundColor:
                  selectedTopic === topic
                    ? "rgba(82, 63, 215, 1)"
                    : "transparent",
              }}
              onClick={() => onSelectTopic(topic)}
            >
              {topic}
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicSelector;
