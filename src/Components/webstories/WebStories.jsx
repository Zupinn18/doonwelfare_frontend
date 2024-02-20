import React, { useState, useEffect } from 'react';

const WebStories = () => {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Fetch stories from an API or any data source
    // For simplicity, I'm just hardcoding some sample data here
    const fetchedStories = [
      {
        id: 1,
        author: "John Doe",
        imageUrl: "https://via.placeholder.com/1080x1920",
        duration: 5000 // Duration in milliseconds
      },
      {
        id: 2,
        author: "Jane Smith",
        imageUrl: "https://via.placeholder.com/1080x1920",
        duration: 3000
      },
      // Add more stories as needed
    ];

    setStories(fetchedStories);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        goToNextStory();
      }
    }, getCurrentStory().duration);

    return () => clearTimeout(timer);
  }, [currentStoryIndex, isPlaying]);

  const getCurrentStory = () => {
    return stories[currentStoryIndex];
  };

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      // Reset to the first story if reached the end
      setCurrentStoryIndex(0);
    }
  };

  const handleStoryClick = () => {
    if (currentStoryIndex < stories.length - 1) {
      goToNextStory();
    } else {
      // Close stories when reached the end
      // You can handle this based on your app's requirements
      // For now, I'm just stopping the playback
      setIsPlaying(false);
    }
  };

  return (
    <div className="web-stories">
      {stories.length > 0 && (
        <div className="story-container">
          <img
            src={getCurrentStory().imageUrl}
            alt={getCurrentStory().author}
            className="story-image"
            width="1080"
            height="1920"
            onClick={handleStoryClick}
          />
          {/* Add any UI elements (e.g., progress bar, author name) here */}
        </div>
      )}
    </div>
  );
};

export default WebStories;
