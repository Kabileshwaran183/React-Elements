import React from "react";
import data from "./Projects.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Product = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <section className=" marginalize">
            <div className="mb-7 md:mb-14 ">
                    <h2 className="title-text">our top project</h2>
                    </div>


                <Slider {...settings}>
                    {data.map((d, index) => (

                        <div
                            key={index}
                            className="flex bg-slate-100  px-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                        >

                            <div className="   w-50 h-25 md:h-60 lg:h-100   flex object-fill items-center justify-center rounded-full mb-1 transition-all duration-300">
                                <img src={d.icon} className=" h-40 w-80"  alt={d.name} title="ahmed paint traders"/>
                            </div>

                            <div className="text-center ">
                                <h3 className="text-[10px]  leading-5   md:text-lg font-bold text-gray-800 mb-1 capitalize ">
                                    {d.name}
                                </h3>
                                <p className="text-gray-600 md:text-sm text-[10px]  leading-5 md:px-6 px-0 mb-1 md:mb-8 ">{d.text}</p>
                            </div>
                        </div>

                    ))
                    }

                </Slider>
            


        </section>

    );
};

export default Product;
