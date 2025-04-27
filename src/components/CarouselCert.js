import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselCert = ({certificados}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <div style={{display: "none"}}></div>,
        prevArrow: <div style={{display: "none"}}></div>,
    };

    return (
        <div style= {{padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        }}>
            <Slider {...settings}style= {{width: "80%", maxWidth: "800px"}}>
                {certificados.map((certificado, index) => (
                    <div key={index}style={{
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center", }} >
                        <img 
                        src={certificado.image} 
                        alt={certificado.titulo} 
                        style={{width: "80%", 
                                maxWidth: "800px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                }}/>
                        <h3 style={{marginTop: "15px",
                                fontSize: "1.5rem",
                                color:"4a90e2",
                                fontWeight: "bold"
                        }}>{certificado.titulo}</h3>
                    </div>
                ))}
                </Slider>

        </div>
    );
};

export default CarouselCert;