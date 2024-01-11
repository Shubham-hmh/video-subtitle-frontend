


import React, { useState, useEffect } from 'react';
import './videoListComponent.css'; // Import the CSS file

const VideoListComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAllVideos(); // Fetch videos when the component mounts
  }, []);

  const fetchAllVideos = async () => {
    try {
      const response = await fetch('https://video-backend-mpzc.onrender.com/api/videos');
      if (response.ok) {
        const data = await response.json();
        setVideos(data.videos);
      } else {
        console.error('Failed to fetch videos');
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

const handlePlayVideo = async (videoId) => {
    try {
      const response = await fetch(`https://video-backend-mpzc.onrender.com/api/videos/${videoId}`);
      if (response.ok) {
        // ... (unchanged code to set up the video player)
        const data = await response.json();
                const videoPath = data.videoPath; // Assuming 'filePath' contains the path to the video file
                console.log(videoPath)
        
                const videoContainer = document.getElementById(`video-container-${videoId}`);
                videoContainer.innerHTML = `<video id="video-${videoId}" controls width="500" height="300"><source src="http://localhost:5000/${videoPath}" type="video/mp4" /></video>`;
  
        const subtitleResponse = await fetch(`https://video-backend-mpzc.onrender.com/api/subtitles/${videoId}`);
        if (subtitleResponse.ok) {
          const subtitlesData = await subtitleResponse.json();
          const videoElement = document.getElementById(`video-${videoId}`);
  
          videoElement.addEventListener('timeupdate', (event) => {
            const currentTime = event.target.currentTime;
            const subtitleContainer = document.getElementById(`subtitles-${videoId}`);
            subtitleContainer.innerHTML = ''; // Clear previous subtitles
  
            // Check if subtitlesData.subtitles is an array before using find
            if (Array.isArray(subtitlesData.subtitles)) {
              const currentSubtitle = subtitlesData.subtitles.find(subtitle => {
                const timestamp = parseFloat(subtitle.timestamp);
                return currentTime >= timestamp && currentTime < timestamp + 5;
              });
  
              if (currentSubtitle) {
                const subtitleText = currentSubtitle.text;
                const subtitleElement = document.createElement('div');
                subtitleElement.textContent = subtitleText;

 // Apply styles directly
 subtitleElement.style.position = 'absolute';
 subtitleElement.style.background = 'rgba(0, 0, 0, 0.7)';
 subtitleElement.style.padding = '8px';
 subtitleElement.style.borderRadius = '4px';
 subtitleElement.style.maxWidth = '400px';
 subtitleElement.style.wordWrap = 'break-word';
 subtitleElement.style.bottom = '20px'; // Adjust the position from the bottom
 subtitleElement.style.left = '50%';
 subtitleElement.style.transform = 'translateX(-50%)';
 subtitleElement.style.display = 'block'; // Show the subtitle

 // Add styles for subtitle text
 subtitleElement.style.fontSize = '16px';
 subtitleElement.style.color = '#fff'; // Set the text color for subtitle text
 subtitleElement.style.textAlign = 'center'; // Set the text alignment for subtitle text


                subtitleContainer.appendChild(subtitleElement);
              }
            } else {
              console.error('Subtitles data is not an array');
            }
          });
  
          const subtitlesContainer = document.createElement('div');
          subtitlesContainer.id = `subtitles-${videoId}`;
          videoContainer.appendChild(subtitlesContainer);
        } else {
          console.error('Failed to fetch subtitles');
        }
      } else {
        console.error('Failed to fetch video');
      }
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };
  
  return (
    <div>
      <h2>All Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <p>{video.title}</p>
            <button onClick={() => handlePlayVideo(video._id)}>Play Video</button>
            <div id={`video-container-${video._id}`} >
              <div id={`subtitles-container`} className={`subtitles-container`}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoListComponent;


