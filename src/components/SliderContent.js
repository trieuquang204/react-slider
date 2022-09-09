import React from "react";

function SliderContent({ activeIndex, sliderName }) {
  return (
    <section>
      {sliderName.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="slider-ct">
            <h2 className="slide-title">{slide.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;