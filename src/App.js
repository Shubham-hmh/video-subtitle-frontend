import React from 'react';
import VideoUpload from './components/VideoUpload';

import VideoListComponent from './components/VideoListComponent';

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Video Subtitle Application</h1>
      <VideoUpload  />
      <VideoListComponent/>
    </div>
  );
};

export default App;
