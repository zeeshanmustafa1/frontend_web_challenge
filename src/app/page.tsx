"use client"; // This is a client component 👈🏽

import React, {useState} from "react";
import NavBar from "../components/navbar";
import TopicSelector from "../components/topicSelector";
import TitleSelector from "../components/titleSelector";
import TextLengthSlider from "../components/textLengthSlider";
import Footer from "@/components/footer";
import {titlesByTopic} from "@/constants/dropDownConstants";


const HomePage = () => {
  const [selectedTopic, setSelectedTopic] = useState("Fun");
  const [textLength, setTextLength] = useState(500);

  const handleTopicChange = (topic: React.SetStateAction<string>) => {
    setSelectedTopic(topic);
  };

  const handleTextLengthChange = (event: Event, newValue: number | number[]) => {
    setTextLength(newValue as number);
  };

  return (
    <div>
      <NavBar/>
      <div
        style={{
          backgroundColor: "rgba(58, 57, 64, 1)",
          height: "78vh",
          padding: "30px",
        }}
      >
        <TopicSelector
          selectedTopic={selectedTopic}
          onSelectTopic={handleTopicChange}
        />
        {selectedTopic && (
          <TitleSelector
            titles={titlesByTopic[selectedTopic] as string[]}
            selectedTopic={selectedTopic}
          />
        )}
        <TextLengthSlider
          value={textLength}
          onChange={handleTextLengthChange}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
