import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Palette from '../../reusable/Palette';


const Color = () => {
    const { filteredPhones, buyImgs } = useSelector(state => state.phones);
    const [currentColor, setCurrentColor] = useState(null);

    useEffect(() => {
        setCurrentColor(filteredPhones[0])

    }, [filteredPhones])

    return (

        <StyledColor>
            <h4 className="buy-title">Color</h4>
            <div className="carousel">
                <img src={currentColor && currentColor.image.buy} alt="" />
            </div>
            <div className="palette">

                <Palette currentColor={currentColor} setCurrentColor={setCurrentColor} />
            </div>
        </StyledColor>

    );
};

const StyledColor = styled.div`
    display: flex;
    padding: 2rem 0;
    border-top: 1px solid #EEEEEE;

    .buy-title {
        flex-basis: 20%;
    }

    .carousel {
        padding-right: 2rem;
        border-right: 1px solid #EEEEEE;

        
        img {
            width: 100%;
            height: 100%;
        }
    }

    .palette {
        padding: 3rem;
        display: flex;
    }

`

export default Color;