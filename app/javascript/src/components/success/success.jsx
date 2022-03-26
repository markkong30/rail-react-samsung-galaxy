import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import tick from '@images/buy-tick';
import Progress from '../contact/progress';
import { useDispatch } from 'react-redux';
import { updateProgress } from '../../redux/actions/updateProgress';
import { pageTransition } from '../../reusable/animation';

const Success = () => {
    const { order_id } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const { phone, user } = orderDetails;
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchOrder = async () => {
            const data = await axios.get(`/api/orders/${order_id}`)
            console.log(data.data.order)
            setOrderDetails(data.data.order);
        }
        dispatch(updateProgress(3))
        fetchOrder();

        return () => {
            dispatch(updateProgress(1))

        }
    }, [order_id])


    return (
        <StyledSuccess variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <Progress />
            <div className="header">
                <img src={tick} alt="" />
                <h2 className="success-title">Your order has been succesfully paid.</h2>
            </div>
            {(phone && user) &&
                <div className="summaries">
                    <div className="order-summary summary">
                        <h3 className="summary-title">Order Summary</h3>
                        <div className="summary-detail">
                            <div className="detail">
                                <span className='detail-description'>Model</span>
                                <span>Galaxy S22 Ultra 5G, {phone.display_title}, {phone.storage}GB</span>
                            </div>
                            <div className="detail">
                                <span className='detail-description'>Total</span>
                                <span>£{phone.price}.00</span>
                            </div>

                        </div>
                    </div>
                    <div className="contact-summary summary">
                        <h3 className="summary-title">Contact Info</h3>
                        <div className="summary-detail">
                            <div className="detail">
                                <span className='detail-description'>Username</span>
                                <span>{user.username}</span>
                            </div>
                            <div className="detail">
                                <span className='detail-description'>Email</span>
                                <span>{user.email}</span>
                            </div>
                            <div className="detail">
                                <span className='detail-description'>Mobile Number</span>
                                <span>{user.phone_number}</span>
                            </div>

                        </div>
                    </div>
                    <div className="shipping-summary summary">
                        <h3 className="summary-title">Shipping Address</h3>
                        <div className="summary-detail">
                            <div className="detail">
                                <span>{user.address}</span>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </StyledSuccess>
    );
};

const StyledSuccess = styled(motion.div)`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    min-height: 88vh;
    padding: 0 20%;

    .header {
        padding-top: 3rem;
        text-align: center;

        img {
            width: 100px;
            height: 100px;
        }

        h2 {
            margin-top: 1rem;
        }
    }

    .summaries {
        margin-top: 2rem;

        .summary {
            padding: 2rem 0;

            &:not(:last-child) {
                border-bottom: 1px solid silver;
            }


            .summary-title {
                font-size: 1.3rem;
            }

            .summary-detail {
                padding-top: 1rem;

                p, span {
                    font-size: 1.1rem;
                    font-weight: lighter;
                    color: rgb(40, 40, 40);
                }

                .detail {
                    padding: 0.5rem;
                    display: flex;
                    justify-content: space-between;

                    .detail-description {
                        color: grey;
                        font-weight: normal;
                    }

                }
            }
        }
        
    }
`

export default Success;