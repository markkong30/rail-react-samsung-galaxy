import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
    return (
        <StyledSpinner>
            <div className="mask"></div>
            <div className="spinner">
                <div className="one"></div>
                <div className="two"></div>
            </div>
        </StyledSpinner>
    );
};

const StyledSpinner = styled.div`
    position: fixed;
    margin-top: -70px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;


    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        /* background: rgba(0, 0, 0, 0.2); */
        backdrop-filter: blur(1px);

    }

    .spinner {
        width: 10rem;
        height: 10rem;
        position: relative;
        opacity: 0.8;
        z-index: 1;

        div {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 10px solid transparent;
            border-top-color: #0073f7;
            border-radius: 50%;

            &.one {
                border-top-color: #0073f7;
                animation: spinnerOne 1.7s linear infinite;
            }

            &.two {
                border-bottom-color: #0073f7;
                animation: spinnerTwo 1.7s linear infinite;
            }

        }
    }

    @keyframes spinnerOne {
        0% {
            transform: rotate(0deg);
            border-width: 10px;
        }
        50% {
            transform: rotate(180deg);
            border-width: 1px;

        }
        100% {
            transform: rotate(360deg);
            border-width: 10px;

        }
    }

    @keyframes spinnerTwo {
        0% {
            transform: rotate(0deg);
            border-width: 1px;
        }
        50% {
            transform: rotate(180deg);
            border-width: 10px;

        }
        100% {
            transform: rotate(360deg);
            border-width: 1px;

        }
    }
`

export default Spinner;