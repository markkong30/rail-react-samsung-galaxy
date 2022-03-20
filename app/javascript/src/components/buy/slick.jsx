import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import groupSlider from '@images/group-slider'

const Slick = () => {
    const { sliders } = useSelector(state => state.phones);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    };
    return (
        <StyledSlick>
            <Slider {...settings}>
                <div>
                    <img src={groupSlider} alt="" />
                </div>
                {sliders && sliders.map((ele, i) => (
                    <div key={i}>
                        <img src={ele} alt="" />
                    </div>
                ))}
            </Slider>
        </StyledSlick>
    );
};

const StyledSlick = styled.div`
    width: 100%;
    position: relative;
    z-index: 1;
    
    img {
        display: block;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`

export default Slick;