import React from "react";
import "../assets/css/main.scss";
import { Link } from "react-router-dom";
import Heard from "../assets/svg/Vector (3).svg";

function HomePodcastsBook() {
  return (
    <section className="podcasts">
      <div className="podcasts-block">
        <div className="produts-title-box">
          <h3>Podcasts and books </h3>
          <Link to={"/"}>Show all {">"}</Link>
        </div>
        <div className="podc-music-block">
          <figure className="item">
            <div className="music-box"></div>
            <figcaption className="text-box">
              <h4>World Book Club </h4>
              <div className="like-box">
                <img src={Heard} alt="Heard" />
                <span>11 000</span>
              </div>
            </figcaption>
          </figure>
          <figure className="item">
            <div className="music-box"></div>
            <figcaption className="text-box">
              <h4>Phoebe reads a mystery novel </h4>
              <div className="like-box">
                <img src={Heard} alt="Heard" />
                <span>11 000</span>
              </div>
            </figcaption>
          </figure>
          <figure className="item">
            <div className="music-box"></div>
            <figcaption className="text-box">
              <h4>The Book Review </h4>
              <div className="like-box">
                <img src={Heard} alt="Heard" />
                <span>11 000</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HomePodcastsBook;