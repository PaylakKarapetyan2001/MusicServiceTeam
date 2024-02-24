import React from "react";
import "../assets/css/main.scss";
import Carousel from "nuka-carousel";

function HomeCaruselSection() {
  const itemWidth = 670;

  return (
    <section className="album-carusel">
      <div className="carusel-block">
        <Carousel
          dragThreshold={0.1}
          enableKeyboardControls={true}
          renderCenterLeftControls={() => {
            return null;
          }}
          renderCenterRightControls={() => {
            return null;
          }}
          renderBottomCenterControls={() => {
            return null;
          }}
          slidesToShow={1.5}
          className="carousel"
          slideWidth={`${itemWidth + 20}px`}
        >
          <figure className="item">
            <div className="imige-box"></div>
            <figcaption className="imige-text-box">
              <span>Album</span>
              <h3>Name Surname</h3>
              <span>Yours tury</span>
            </figcaption>
          </figure>
          <figure className="item">
            <div className="imige-box"></div>
            <figcaption className="imige-text-box">
              <span>Album</span>
              <h3>Name Surname</h3>
              <span>Yours tury</span>
            </figcaption>
          </figure>
          <figure className="item">
            <div className="imige-box"></div>
            <figcaption className="imige-text-box">
              <span>Album</span>
              <h3>Name Surname</h3>
              <span>Yours tury</span>
            </figcaption>
          </figure>
          <figure className="item">
            <div className="imige-box"></div>
            <figcaption className="imige-text-box">
              <span>Album</span>
              <h3>Name Surname</h3>
              <span>Yours tury</span>
            </figcaption>
          </figure>
        </Carousel>
      </div>
    </section>
  );
}

export default HomeCaruselSection;