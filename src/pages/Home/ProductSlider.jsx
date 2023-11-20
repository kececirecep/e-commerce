import React from "react";
import Slider from "react-slick";

import SpeakerImg from '../../images/speaker.png'
import LaptopImg from '../../images/laptop.png'
import CanonImg from '../../images/canon.png'

import prevArrow from "../../images/prev-arrow.png";
import nextArrow from "../../images/next-arrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductSlider = () => {
    const arrowStyle = {
        width: "250px",  
        height: "250px",  
        fontSize: "124px",
      };
  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <img src={prevArrow} alt="Previous" className="cursor-pointer" style={arrowStyle} />,
    nextArrow: <img src={nextArrow} alt="Next" className="cursor-pointer" style={arrowStyle} />,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-28"> 
      <Slider {...settings}>
        <div>
        <div className="flex justify-center items-center gap-4">
          <div className="img">
            <img src={SpeakerImg} width="150px" alt="" />
          </div>
          <div className="text">
            <h2 className="text-[#1B5A7D] text-xl font-semibold">Speaker</h2>
            <p>(6 items)</p>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-center items-center gap-4">
          <div className="img mt-4">
            <img src={LaptopImg} width="110px" alt="" />
          </div>
          <div className="text">
            <h2 className="text-[#1B5A7D] text-xl font-semibold">Desktop & laptop</h2>
            <p>(6 items)</p>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-center items-center gap-4">
          <div className="img mt-4">
            <img src={CanonImg} width="150px" alt="" />
          </div>
          <div className="text">
            <h2 className="text-[#1B5A7D] text-xl font-semibold">DSLR camera</h2>
            <p>(6 items)</p>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-center items-center gap-4">
          <div className="img">
            <img src={SpeakerImg} width="150px" alt="" />
          </div>
          <div className="text">
            <h2 className="text-[#1B5A7D] text-xl font-semibold">Speaker</h2>
            <p>(6 items)</p>
          </div>
        </div>
        </div> 
      </Slider>
    </div>
  );
};

export default ProductSlider;
