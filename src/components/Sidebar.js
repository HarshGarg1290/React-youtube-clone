// Sidebar.js
import React from 'react';
import './yt_sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar_button">
        <img
          className="sidebar_image"
          src="https://supersimple.dev/public/img/exercises/youtube/icons/home.svg"
          alt=""
        />{' '}
        Home
      </button>
      <button className="sidebar_button">
        <img
          className="sidebar_image"
          src="https://supersimple.dev/public/img/exercises/youtube/icons/explore.svg"
          alt=""
        />{' '}
        Explore
      </button>
      <button className="sidebar_button">
        <img
          className="sidebar_image"
          src="https://supersimple.dev/public/img/exercises/youtube/icons/subscriptions.svg"
          alt=""
        />{' '}
        Subscriptions
      </button>
      <button className="sidebar_button">
        <img
          className="sidebar_image"
          src="https://supersimple.dev/public/img/exercises/youtube/icons/originals.svg"
          alt=""
        />{' '}
        Originals
      </button>
      <button className="sidebar_button">
        <img
          className="sidebar_image"
          src="https://supersimple.dev/public/img/exercises/youtube/icons/youtube-music.svg"
          alt=""
        />{' '}
        Youtube Music
      </button>
      <button className="sidebar_button">
        <img
          className="sidebar_image"
          src="https://supersimple.dev/public/img/exercises/youtube/icons/library.svg"
          alt=""
        />{' '}
        Library
      </button>
    </div>
  );
};

export default Sidebar;
