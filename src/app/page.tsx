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
  const [selectedTitle, setSelectedTitle] = useState("");
  const [textLength, setTextLength] = useState(500);

  const handleTopicChange = (topic: React.SetStateAction<string>) => {
    setSelectedTopic(topic);
    setSelectedTitle("");
  };

  const handleTitleChange = (title: React.SetStateAction<string>) => {
    setSelectedTitle(title);
  };

  const handleTextLengthChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setTextLength(newValue);
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
            titles={titlesByTopic[selectedTopic]}
            selectedTitle={selectedTitle}
            selectedTopic={selectedTopic}
            onSelectTitle={handleTitleChange}
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
