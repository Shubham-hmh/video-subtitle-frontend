const API_BASE_URL = 'https://video-backend-mpzc.onrender.com/api'; 

export const fetchVideos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos`);
    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }
    const data = await response.json();
    return data.videos; // Assuming the response has a 'videos' array
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export const uploadVideo = async (videoData) => {
  try {
    const formData = new FormData();
    formData.append('video', videoData.file);
    formData.append('title', videoData.title);

    const response = await fetch(`${API_BASE_URL}/videos/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload video');
    }
    return { success: true };
  } catch (error) {
    console.error('Error uploading video:', error);
    return { success: false };
  }
};

// Add more video-related functions as needed
