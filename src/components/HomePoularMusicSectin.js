import React from "react";
import "../assets/css/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HomePoularMusicSectin() {
  return (
    <>
      <section className="papular">
        <div className="papular-block">
          <h2>Popular</h2>

          <div className="item">
            <div className="imige-text-box">
              <p>1</p>
              <div className="imige-block"></div>
              <h5>Name</h5>
            </div>

            <div className="likes-block">
              <span>188.199.888</span>
              <span>2:15</span>
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
          </div>

          <div className="item">
            <div className="imige-text-box">
              <p>2</p>
              <div className="imige-block"></div>
              <h5>Name</h5>
            </div>

            <div className="likes-block">
              <span>188.199.888</span>
              <span>2:15</span>
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
          </div>

          <div className="item">
            <div className="imige-text-box">
              <p>3</p>
              <div className="imige-block"></div>
              <h5>Name</h5>
            </div>

            <div className="likes-block">
              <span>188.199.888</span>
              <span>2:15</span>
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
          </div>
          <Link className="more" to="/">
            See more
          </Link>
        </div>
      </section>
      <div className="player">
        <div className="player-block">
          <div className="player-box">
            <div className="imige-box">
              <h3>Name</h3>
              <span>Best of</span>
            </div>
            <div className="text-box">
              <h3>Best of  Nemra </h3>
              <span>Playlist</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePoularMusicSectin;
