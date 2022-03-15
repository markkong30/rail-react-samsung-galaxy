import React from 'react';
import styled from 'styled-components';
import img from '@images/accesories'

const Accesories = () => {
    return (
        <StyledAccessories>
            <div className="text-container">
                <h4 className="sub-heading">ACCESSORIES</h4>
                <h3 className="title">Take the Ultra <br />experience further</h3>
                <button className="btn btn-default">LEARN MORE</button>
            </div>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
        </StyledAccessories>
    );
};

const StyledAccessories = styled.div`
    min-height: 100vh;
    padding-bottom: 10%;

    .text-container {
        padding: 10% 0 0 15%;
    }

    .image-container {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }


`

export default Accesories;