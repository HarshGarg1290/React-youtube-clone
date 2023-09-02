import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoThumbnail from './components/VideoThumbnail';

const App = () => {
 
  const videoData = [{}];

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="videos">
        {videoData.map((video, index) => (
          <VideoThumbnail key={index} videoData={video} />
        ))}
      </div>
    </div>
  );
};

export default App;