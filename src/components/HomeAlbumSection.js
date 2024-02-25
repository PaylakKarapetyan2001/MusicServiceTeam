import React from "react";
import "../assets/css/main.scss";

function HomeAlbumSection() {
  return (
    <section className="album">
      <div className="album-block">
        <h1>Albums</h1>

        <div className="album-music-block">
          <div className="item">
            <figure className="item-box">
              <div className="imige-box"></div>
              <figcaption className="text-box">
                <h2>Name</h2>
                <div className="dat">
                  <span>2024</span>
                  <span>album</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="item">
            <figure className="item-box">
              <div className="imige-box"></div>
              <figcaption className="text-box">
                <h2>Name</h2>
                <div className="dat">
                  <span>2024</span>
                  <span>album</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="item">
            <figure className="item-box">
              <div className="imige-box"></div>
              <figcaption className="text-box">
                <h2>Name</h2>
                <div className="dat">
                  <span>2024</span>
                  <span>album</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAlbumSection;
