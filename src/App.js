// import React from 'react';
// import VideoUpload from './components/VideoUpload';

// import VideoListComponent from './components/VideoListComponent';
// import AudioPlayer from './components/AudioPlayer';

// const App = () => {
//   return (
//     <div>
//       <h1 style={{textAlign:"center"}}>Video Subtitle Application</h1>
//       {/* <VideoUpload  />
//       <VideoListComponent/> */}
//       <AudioPlayer/>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';

import ShowDetails from './components/ShowDetails';

function App() {
  return (
 

        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/show/:id" element={<ShowDetails />} />

          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
