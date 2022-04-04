import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import Slick from './slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentStock } from '../../redux/actions/fetchCurrentStock';
import tick from '@images/buy-tick';
import Color from './color'
import Checkout from './small_components/checkout';
import { pageTransition } from '../../reusable/animation';

const Buy = () => {
    const dispatch = useDispatch();
    const { specs } = useSelector(state => state.specs);
    const { filteredPhones } = useSelector(state => state.phones);
    const { currentStock, isLoading } = useSelector(state => state.buy);
    const [currentStorage, setCurrentStorage] = useState(128);
    const [currentColor, setCurrentColor] = useState(null);

    useEffect(() => {
        setCurrentColor(filteredPhones[0])

    }, [filteredPhones])

    useEffect(() => {
        if (currentColor && currentStorage) {
            const title = currentColor.title;
            const storage = currentStorage;
            dispatch(fetchCurrentStock(title, storage));
        }

    }, [currentColor, currentStorage])

    const displayStock = () => {
        const stock = currentStock.stock;

        switch (true) {
            case stock >= 15:
                return 'In Stock';
            case stock >= 10:
                return 'Limited Stock!';
            case stock >= 5:
                return 'Only a Few Left!';
            case stock == 0:
                return 'Out of Stock';
            default:
                return;
        }
    }

    return (
        <StyledBuy variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <Slick />
            <div className="buy-container">
                <div className="device">
                    <h4 className="buy-title">Device</h4>
                    <div className="cards">
                        <div className="card selected">
                            <p className="card-title">Galaxy S22 Ultra</p>
                            <p className="card-price">From £1,149.00</p>
                        </div>

                    </div>
                </div>

                <div className="storage">
                    <h4 className="buy-title">Storage</h4>
                    <div className="cards">
                        {specs.map((ele, i) => (
                            <div className={`card ${currentStorage == ele.storage ? 'selected' : ''}`} key={i} onClick={() => setCurrentStorage(ele.storage)}>
                                <p className="card-title">{ele.storage}GB | 12GB</p>
                                <p className="card-price">£{ele.price}.00</p>
                                {(currentStorage == ele.storage && !isLoading) &&
                                    <p className="card-stock">
                                        {currentStock.stock > 0 && <img src={tick} alt="" />}
                                        <span>{displayStock()}</span>
                                    </p>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="color-checkout">
                    <Color currentColor={currentColor} setCurrentColor={setCurrentColor} >
                        {currentStock && <Checkout currentStock={currentStock} />}
                    </Color>
                </div>

            </div>
        </StyledBuy>
    );
};

const StyledBuy = styled(motion.div)`
    overflow: hidden;

    .buy-container {
        padding: 5% 10%;
        position: relative;
        
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
                cursor: pointer;

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

                &.selected {
                    border: 2px solid #5BA4FF;

                }
            }
            
        }

        .storage {
            .card {
                padding: 1rem 11.7rem 1rem 1rem;

            }
        }
        
    }

    @media (max-width: 1400px) {
        .buy-container {
            padding: 5% 0 5% 10%;
        }
    }
   
    @media (max-width: 600px) {
        .buy-container {
            padding: 5%;

            .buy-title {
                flex-basis: 25%;
            }

            .cards {
                flex-basis: 75%;

                .card {
                    padding: 1rem 7rem 1rem 1rem ;
                }
                
            }

            .storage {
                .card {
                    padding: 1rem 8.8rem 1rem 1rem ; 

                }
            }
        }

    }   

`

export default Buy;