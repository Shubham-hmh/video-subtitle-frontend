// VideoUpload.js

import React, { useState } from 'react';
import './videoUpload.css'; 

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [subtitles, setSubtitles] = useState([]);
  const [timestamp, setTimestamp] = useState('');
  const [subtitleText,setSubtitleText]=useState("");

  const handleVideoUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('title', title);
      formData.append('timestamp', timestamp);
      formData.append('subtitles', JSON.stringify(subtitles));

      console.log(formData);

      const response = await fetch('https://video-backend-mpzc.onrender.com/api/videos/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Video uploaded successfully!');
        // Optionally, you can reset the form or show a success message to the user
      } else {
        console.error('Failed to upload video.');
        // Handle upload failure
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      // Handle error
    }
  };

  const handleSubtitleAddition = () => {
    const newSubtitle = {
      text: subtitleText,
      timestamp: Number(timestamp),
    };
    setSubtitles([...subtitles, newSubtitle]);
    // Optionally, clear the input fields after adding the subtitle
    setSubtitleText('');
    setTimestamp('');
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Video Upload with Subtitles</h2>
      <input type="text" placeholder="Video Title5" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Subtitle Text 6"
        value={subtitleText}
        onChange={(e) => setSubtitleText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Timestamp 6"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <button onClick={() => handleSubtitleAddition()}>Add Subtitle</button>
      <button onClick={() => handleVideoUpload()}>Upload Video</button>
    </div>
  );
};

export default VideoUpload;
