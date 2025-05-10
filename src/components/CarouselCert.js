import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const CarouselCert = ({ certificados }) => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div style={{ display: "none" }} />,
    prevArrow: <div style={{ display: "none" }} />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} className="carousel-slider">
        {certificados.map((certificado, index) => (
          <div key={index} className="carousel-slide">
            <img src={certificado.image} alt={certificado.tituloKey} />
            <h3>{t(certificado.tituloKey)}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCert;