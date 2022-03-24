import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import { safeCredentials, handleErrors } from '@src/reusable/fetchHelper';
import { pageTransition } from '../../reusable/animation';

const Orders = () => {
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await axios.get('/api/orders/orders_by_user')
            console.log(data.data.orders)
            setOrders(data.data.orders)
        }

        fetchOrders();
    }, [])

    const returnStripeCheckout = (order_id) => {
        return fetch(`/api/charges?order_id=${order_id}&cancel_url=${window.location.pathname}`, safeCredentials({
            method: 'POST',
        }))
            .then(handleErrors)
            .then(response => {
                const stripe = Stripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

                stripe.redirectToCheckout({
                    sessionId: response.charge.checkout_session_id,
                }).then((result) => {
                    console.log(result)
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <StyledOrders variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <h1 className="table-title">Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Storage</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders &&
                        orders.map(ele => (
                            <tr key={ele.id}>
                                <td>Galaxy S22 Ultra 5G</td>
                                <td>{ele.phone.display_title}</td>
                                <td>{ele.phone.storage}GB</td>
                                {ele.paid ?
                                    <td>
                                        <Link to={`/user/${ele.id}/success`}>
                                            <button className='btn-receipt'>Receipt</button>
                                        </Link>
                                    </td>
                                    :
                                    <td><button className='btn-pay' onClick={() => returnStripeCheckout(ele.id)}>Pay now</button></td>
                                }
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </StyledOrders>
    );
};

const StyledOrders = styled(motion.div)`
    min-height: calc(100vh - 150px);
    padding: 5% 15%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    .table-title {
        font-size: 2.5rem;
    }

    table {
        padding: 0rem 2rem;
        margin-top: 3rem;
        /* background: #F2F2F2; */
        border-radius: 1rem;
        border-collapse: collapse;


        thead {
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

            tr {

                /* border: 1px solid black; */
            }
        }

        th {
            text-align: start;
        }

        td {
            border-bottom: 1px solid silver;
            color: rgb(60, 60, 60);

        }

        th, td {
            padding: 2rem;

        }

        button {
            padding: 0.6rem 1.3rem;
            border-radius: 1rem;
            color: white;
            transition: all 0.6s ease-in-out;

            &.btn-receipt {
                background: linear-gradient(to left, #4CAF50 50%, black 50%) right;
                background-size: 200%;

                &:hover {
                    background-position: left;  
                }

            }

            &.btn-pay {
                background: linear-gradient(to left, #EF5350 50%, black 50%) right;
                background-size: 200%;

                &:hover {
                    background-position: left;
                }
            }
        }
        

        
        
    }

`

export default Orders;