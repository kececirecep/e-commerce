import React from "react";
import Slider from "react-slick";

import SliderImg from '../../images/slider.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        style: {
            display: "flex",
            height: "450px",
        },
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="flex justify-between items-center px-80 py-12">
                    <div className="slideContent font-semibold">
                        <h1 className="text-[53px] text-[#1B5A7D] font-semibold">Canon <br /> camera</h1>
                        <div className="my-4 flex gap-4">
                            <span className="bg-[#EDA415] text-white p-4 rounded-2xl cursor-pointer">Shop now</span>
                            <span className="bg-transparent text-[#1B5A7D] border border-[#1B5A7D] p-4 rounded-2xl cursor-pointer">View more</span>
                        </div>
                    </div>
                    <div className="slideImg ">
                        <img src={SliderImg} alt="" className="relative" />
                        <div className="imgText absolute flex flex-col justify-center items-center bottom-[60px] right-0 bg-[#EDA415] w-[100px] h-[100px] text-lg rounded-full text-white">
                            <p>only</p>
                            <p>$89</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="flex justify-between items-center px-80 py-12">
                    <div className="slideContent font-semibold">
                        <h1 className="text-[53px] text-[#1B5A7D] font-semibold">Canon <br /> camera</h1>
                        <div className="my-4 flex gap-4">
                            <span className="bg-[#EDA415] text-white p-4 rounded-2xl cursor-pointer">Shop now</span>
                            <span className="bg-transparent text-[#1B5A7D] border border-[#1B5A7D] p-4 rounded-2xl cursor-pointer">View more</span>
                        </div>
                    </div>
                    <div className="slideImg ">
                        <img src={SliderImg} alt="" className="relative" />
                        <div className="imgText absolute flex flex-col justify-center items-center bottom-[60px] right-0 bg-[#EDA415] w-[100px] h-[100px] text-lg rounded-full text-white">
                            <p>only</p>
                            <p>$89</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="flex justify-between items-center px-80 py-12">
                    <div className="slideContent font-semibold">
                        <h1 className="text-[53px] text-[#1B5A7D] font-semibold">Canon <br /> camera</h1>
                        <div className="my-4 flex gap-4">
                            <span className="bg-[#EDA415] text-white p-4 rounded-2xl cursor-pointer">Shop now</span>
                            <span className="bg-transparent text-[#1B5A7D] border border-[#1B5A7D] p-4 rounded-2xl cursor-pointer">View more</span>
                        </div>
                    </div>
                    <div className="slideImg ">
                        <img src={SliderImg} alt="" className="relative" />
                        <div className="imgText absolute flex flex-col justify-center items-center bottom-[60px] right-0 bg-[#EDA415] w-[100px] h-[100px] text-lg rounded-full text-white">
                            <p>only</p>
                            <p>$89</p>
                        </div>
                    </div>
                </div>
            </div> 
        </Slider>
    );
}