import React from 'react';
import Slider from "react-slick";
// Import css files for react-slick carousel
import './Home.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@material-ui/core';

const NavCarousel = () => {
    // carousel next arrow icon on the right position
    const NextArrow = ({ onClick }) => {
        return (
            <div className={`position-absolute NextBtn top-0 text-success ${'btn'} ${'nextBtn'}`} onClick={onClick}>
                <Icon>navigate_next</Icon>
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className={`d-none position-absolute NextBtn top-0 text-success ${'btn'} ${'nextBtn'}`} onClick={onClick}>
                <Icon>navigate_next</Icon>
            </div>
        );
    };


    // carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        pauseOnHover: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const allButtons = [
        { text: 'All for you', cl: "mx-0 btn-success" },
        { text: 'Recommended', cl: "" },
        { text: 'ManuFacturers', cl: "" },
        { text: 'Winter Special', cl: "" },
        { text: 'Men Special', cl: "" },
        { text: 'Women wear', cl: "" },
        { text: 'Kid wear', cl: "" },
        { text: 'T-shirts', cl: "" },
        { text: 'Mans Fashion', cl: "" },
    ]
    return (
        <div id={`ourChoiceCarouselWrapper`} className="container">
            <Slider {...settings}>
                {allButtons.map((data, index) => (
                    <button key={index} className={`btn px-1 ${data.cl} w-100`}>{data.text}</button>
                ))}
            </Slider>
        </div>
    );
};

export default NavCarousel;