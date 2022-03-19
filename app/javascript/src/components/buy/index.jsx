import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import Slick from './slick';
import { useSelector } from 'react-redux';
import tick from '@images/buy-tick';
import Color from './color'

const Buy = () => {
    const { specs } = useSelector(state => state.specs);

    return (
        <StyledBuy>
            <Slick />
            <div className="buy-container">
                <div className="device">
                    <h4 className="buy-title">Device</h4>
                    <div className="cards">
                        <div className="card">
                            <p className="card-title">Galaxy S22 Ultra</p>
                            <p className="card-price">From £1,149.00</p>
                        </div>

                    </div>
                </div>

                <div className="storage">
                    <h4 className="buy-title">Storage</h4>
                    <div className="cards">
                        {specs.map((ele, i) => (
                            <div className="card" key={i}>
                                <p className="card-title">{ele.storage}GB | 12GB</p>
                                <p className="card-price">£{ele.price}.00</p>
                                <p className="card-stock">
                                    <img src={tick} alt="" />
                                    <span>In Stock</span></p>
                            </div>
                        ))}
                    </div>
                </div>

                <Color />

            </div>
        </StyledBuy>
    );
};

const StyledBuy = styled(motion.div)`
    .buy-container {
        padding: 5% 10%;

        
        .device, .storage {
            padding: 2rem 0;
            border-top: 1px solid #EEEEEE;
            display: flex;
            
        }

        .buy-title {
            flex-basis: 20%;
        }

        .cards {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            flex-basis: 80%;
            
            
            
            .card {
                padding: 1rem 10rem 1rem 1rem;
                border: 1px solid #EEEEEE;
                border-radius: 0.5rem;
                position: relative;
            }

            .card-title {
                font-size: 0.9rem;
                font-weight: bold;
            }

            .card-price {
                font-size: 0.8rem;
                font-weight: lighter;
                margin-top: 0.2rem;
            }

            .card-stock {
                display: flex;
                align-items: center;
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translate(0, 130%);
                padding-left: 1rem;
                font-size: 0.8rem;
                font-weight: lighter;

                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 0.5rem;
                }

               
            }
        }

        .storage {
            .card {
                padding: 1rem 11.5rem 1rem 1rem;

            }
        }

        

    }

   

`

export default Buy;