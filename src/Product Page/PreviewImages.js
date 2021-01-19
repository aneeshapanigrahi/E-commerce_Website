import React from "react";

const PreviewImages = (props) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href={props.images[0]}>
            <img className="img-fluid" src={props.images[0]} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href={props.images[1]}>
            <img className="img-fluid" src={props.images[1]} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href={props.images[2]}>
            <img className="img-fluid" src={props.images[2]} alt="" />
          </a>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          style={{
            backgroundColor: "#3c685f",
            borderRadius: "15%",
            msTransform: "scale(2)",
          }}
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          style={{ backgroundColor: "#3c685f", borderRadius: "15%" }}
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default PreviewImages;
