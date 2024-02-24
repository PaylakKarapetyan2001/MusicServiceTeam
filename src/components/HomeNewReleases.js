import React from 'react';
import '../assets/css/main.scss';
import { Link } from 'react-router-dom';


function HomeNewReleases() {
  return (
    <section className="podcasts">
    <div className="podcasts-block">
      <div className="produts-title-box">
        <h3>New releases</h3>
        <Link to={"/"}>Show all {">"}</Link>
      </div>
      <div className="podc-music-block">
        <figure className="item">
          <div className="music-box"></div>
          <figcaption className="text-box">
            <h4>Compadres- EP</h4>
              <span>Nemra</span>
          </figcaption>
        </figure>
        <figure className="item">
          <div className="music-box"></div>
          <figcaption className="text-box">
            <h4>Everything I wanted</h4>
              <span>Billie Eilish </span>
          </figcaption>
        </figure>
        <figure className="item">
          <div className="music-box"></div>
          <figcaption className="text-box">
            <h4>A Letter from Daisy </h4>
              <span>Charlie Worsham</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>  )
}

export default HomeNewReleases;