import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentStock } from '../../../redux/actions/fetchCurrentStock';

const SubmitCheckout = ({ proceedCheckout, isValid }) => {
    const dispatch = useDispatch();
    const { title, storage } = useParams();

    useEffect(() => {

        dispatch(fetchCurrentStock(title, storage))
    }, [dispatch])
    const { currentStock } = useSelector(state => state.buy);

    return (
        <StyledChekcout>
            {currentStock &&
                <>

                    <h3>Total <span>£{currentStock.price}.00</span></h3>
                    <div className="summary">
                        <h4>Order Summary</h4>
                        <li>Galaxy S22 Ultra 5G, <span>{currentStock.display_title}, {currentStock.storage}GB</span></li>
                    </div>
                    {isValid ?
                        <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className="btn btn-checkout" onClick={() => proceedCheckout(title, storage)}>Make Payment</motion.button>
                        :
                        <button className="btn-out-of-stock">Make Payment</button>
                    }
                </>
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

export default SubmitCheckout;