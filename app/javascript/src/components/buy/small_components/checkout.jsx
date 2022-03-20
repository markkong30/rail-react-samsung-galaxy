import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const Checkout = ({ currentStock }) => {

    return (
        <StyledChekcout>
            <h3>Total <span>£{currentStock.price}.00</span></h3>
            {currentStock.stock > 0 ?
                <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className="btn btn-checkout">Checkout</motion.button>
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
    margin-top: 2rem;

    h3 {
        padding-bottom: 1rem;
        border-bottom: 1px solid silver;
        display: flex;
        justify-content: space-between;
    }

    .btn-checkout {
        margin-top: 2rem;
        padding: 1rem 0;
        width: 25rem;
        color: white;
        background: #0069E9;
        border-radius: 1rem;

    }

    .btn-out-of-stock {
        margin-top: 2rem;
        padding: 1rem 0;
        width: 25rem;
        border-radius: 1rem;
        background: #BDBDBD;
        color: white;
        cursor: not-allowed;
    }
`

export default Checkout;