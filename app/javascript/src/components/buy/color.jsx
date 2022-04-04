import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Palette from '../../reusable/Palette';


const Color = ({ currentColor, setCurrentColor, children }) => {
    const { buyImgs } = useSelector(state => state.phones);

    return (
        <StyledColor>
            <h4 className="buy-title">Color</h4>
            <div className="carousel">
                <img src={currentColor && currentColor.image.buy} alt="" />
            </div>
            <div className="palette">
                <Palette currentColor={currentColor} setCurrentColor={setCurrentColor} />
                {children}
            </div>
        </StyledColor>
    );
};

const StyledColor = styled.div`
    display: flex;
    padding: 2rem 0;
    border-top: 1px solid #EEEEEE;
    flex-wrap: wrap;

    .buy-title {
        flex-basis: 20%;
    }

    .carousel {
        padding-right: 2rem;
        border-right: 1px solid #EEEEEE;
        flex-basis: 30%;
        /* flex-shrink: 0; */
        
        img {
            width: 100%;
            /* height: 100%; */
        }
    }

    .palette {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 50%;
    }

    @media (max-width: 1250px) {

        .carousel {
            flex-basis: 40%;           
        }

        .palette {
            flex-basis: 80%;
        }
    }

    @media (max-width: 600px) {


        .carousel {
            flex-basis: 60%;           
        }

        .palette {
            flex-wrap: wrap;
            padding: 3rem 0;
            flex-basis: 100%;
            justify-content: center;
        }
    }
    @media (max-width: 450px) {
        .palette {

            /* margin-left: -15%; */
        }
    }


`

export default Color;