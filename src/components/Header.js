// Header.js
import React from 'react';
import './yt_header.css';



const Header = () => {
  return (
    <div className="Head">
    <div className="header">
        
      <div className="start">
        <div>
          <img
            className="hamburger_logo"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/hamburger-menu.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="youtube_logo"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/youtube-logo.svg"
            alt=""
          />
        </div>
      </div>

      <div className="mid">
        <input
          className="searchbox"
          type="text"
          placeholder="Search"
        />
        <button className="button1">
          <img
            className="search_icon"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/search.svg"
            alt=""
          />
        </button>
        <button className="button2">
          <img
            className="mic_icon"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/voice-search-icon.svg"
            alt=""
          />
        </button>
      </div>

      <div className="end">
        <button className="end_button">
          <img
            className="end1"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/upload.svg"
            alt=""
          />
        </button>
        <button className="end_button">
          <img
            className="end1"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/youtube-apps.svg"
            alt=""
          />
        </button>
        <button className="end_button">
          <div className="notifications">4</div>
          <img
            className="end1"
            src="https://supersimple.dev/public/img/exercises/youtube/icons/notifications.svg"
            alt=""
          />
        </button>
        <button className="end_button">
          <img
            className="end2"
            src="https://yt3.ggpht.com/ytc/AOPolaSQkmtfunwiD3nuVw9W0xPywnJU43vBh-xwIQGmSf8-0JgZYpKK-2T8zxi1bo-J=s600-c-k-c0x00ffffff-no-rj-rp-mo"
            alt=""
          />
        </button>
        </div>
        </div>
        <div className="scroll">
                <ul>
                <li className="active"><a href="#">ALL</a></li>
                <li><a href="#">Live</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Gaming</a></li>
                </ul>
        </div>
    </div>
    
  );
};

export default Header;



