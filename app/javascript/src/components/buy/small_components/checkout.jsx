import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';

const Checkout = ({ currentStock }) => {

    return (
        <StyledChekcout>
            <h3>Total <span>£{currentStock.price}.00</span></h3>
            <div className="summary">
                <h4>Order Summary</h4>
                <li>Galaxy S22 Ultra 5G, <span>{currentStock.display_title}, {currentStock.storage}GB</span></li>
            </div>
            {currentStock.stock > 0 ?
                <Link to={`/buy/checkout/${currentStock.title}/${currentStock.storage}`}>
                    <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className="btn btn-checkout">Checkout</motion.button>
                </Link>

                :
                <button className="btn-out-of-stock">Out of Stock</button>
            }

        </StyledChekcout>
    );
};

const StyledChekcout = styled.div`
    padding: 2rem;
    background: #F7F7F7;
    border-radius: 1rem;
    margin-top: 3rem;
   

    h3 {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid silver;
        display: flex;
        justify-content: space-between;
    }

    .summary {
        padding: 1.5rem 0 ;
        border-bottom: 1px solid silver;

        h4 {
            font-size: 0.9rem;

        }

        li {
            font-size: 0.8rem;
            font-weight: lighter;
            margin-top: 0.3rem;
        }
    }
    

    .btn-checkout {
        margin-top: 2rem;
        padding: 1rem 0;
        width: 25rem;
        color: white;
        background: #0069E9;
        border-radius: 1rem;
        transform-origin: center !important;
    }

    .btn-out-of-stock {
        margin-top: 2rem;
        padding: 1rem 0;
        width: 25rem;
        border-radius: 1rem;
        background: #BDBDBD;
        color: white;
        cursor: not-allowed;
        transform-origin: center !important;
    }

    @media (max-width: 600px) {
        transform: scale(0.7);

    }

    @media (max-width: 450px) {
        transform: scale(0.7);
        transform-origin: left;

    }
`

export default Checkout;