import './TopBar.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";

function TopBar(props) {
  const [currentPage, setCurrentPage] = useState('');


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className = 'navbar-elem'>
            <Link to = "https://www.instagram.com/thehigherkeys/">
                <img src = "https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png/v1/fill/w_47,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7ffe259c9e54f59837481b3dd0130eb.png"/>
            </Link>

        </li>
        <li className = "navbar-elem">
            <Link to = 'https://www.youtube.com/@TheHigherKeys'>
                <img src = "https://static.wixstatic.com/media/af037f3cc11741d1ada5c7f70d1074bf.png/v1/fill/w_47,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/af037f3cc11741d1ada5c7f70d1074bf.png"></img>
            </Link>

        </li>
        <li className = 'navbar-elem'>
            <Link to = "https://open.spotify.com/artist/7vaK0nWgmCn9cBW8OtJLrq?si=DrO-SZ7gRX2UElm83FqFTw&nd=1&dlsi=ba1cd9c07ae041f4">
                <img src = "https://static.wixstatic.com/media/11062b_6be2954dd07643d2be1381d1ff5a40ba~mv2.png/v1/fill/w_47,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6be2954dd07643d2be1381d1ff5a40ba~mv2.png"/>
            
            </Link>
        </li>
        <li className = 'navbar-elem' style = {{ display: "flex", gap: "20px" }}>
        </li>

      </ul>
      
    </nav>
  );
}


export default TopBar;