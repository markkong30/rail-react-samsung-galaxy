import React from 'react';
import styled from 'styled-components';
import SignUpForm from './signUpForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import { pageTransition } from '../../reusable/animation';
import { useSelector } from 'react-redux';

const Contact = () => {
    const { userDetail } = useSelector(state => state.user);


    return (
        <StyledContact variants={pageTransition} initial="hidden" animate="show" exit="exit" >
            <div className="progress">
                <div className="step">
                    <div className="number one" >1</div>
                </div>
                <div className="line"></div>
                <div className="step">
                    <div className="number two" >2</div>
                </div>
                <div className="line"></div>
                <div className="step">
                    <div className="number three" >3</div>
                </div>
            </div>
            {userDetail !== null ||
                <div className="member-check">
                    <div className="left">
                        <h4 className="check-title">Already a member?</h4>
                        <p className="check-description">Please sign in to continue, or register below now berfore making payments.</p>
                    </div>
                    <Link to="/user/login">
                        <button className="right btn-sign-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <g fill="none" fillRule="evenodd">
                                    <g fill="currentColor" fillRule="nonzero">
                                        <g>
                                            <path d="M12 12.5c4.337 0 8 3.555 8 7.764v1.986c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25v-1.986c0-4.209 3.663-7.764 8-7.764zm0 2c-3.196 0-6 2.693-6 5.764V21.5h12v-1.236c0-3.07-2.804-5.764-6-5.764zm0-14c3.033 0 5.5 2.467 5.5 5.5s-2.467 5.5-5.5 5.5S6.5 9.033 6.5 6 8.967.5 12 .5zm0 2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" transform="translate(-1392 -28) translate(1392 28)"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>Log In</p>
                        </button>
                    </Link>
                </div>
            }

            <SignUpForm userDetail={userDetail} />
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    flex-direction: column;


    .progress {
        padding: 3rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 1rem;

            .number {
                background: #1F89FF;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                text-align: center;
                height: 25px;
                width: 25px;
                font-size: 0.8rem;
                font-weight: bold;

            }

            .number::after {
                content: 'Contact Details';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 100%);
                color: black;
                white-space: nowrap;
            }

            .number.two::after {
                content: 'Payment';
            }
            .number.three::after {
                content: 'Confirmation';
            }

            label {
                margin-top: 0.5rem;
                font-size: 0.8rem;
            }

        }

        .line {
            /* margin-top: 12.5px; */
            height: 1px;
            width: 20vw;
            background: #BBBBBB;
        }
    }

    .member-check {
        margin: 2% 10%;
        padding: 1rem 2rem;
        background: #F7F7F7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        border-radius: 0.5rem;

        .left {
            display: flex;
            flex-direction: column;
            flex-basis: 60%;

            .check-title {
                font-size: 0.9rem;
            }

            .check-description {
                margin-top: 0.3rem;
                font-size: 0.75rem;
                font-weight: lighter;
            }
        }

        .right.btn-sign-in {
            display: flex;
            justify-content: flex-end;
            flex-basis: 40%;


            p {
                font-size: 0.9rem;
                font-weight: bold;
                margin-left: 0.5rem;
            }

            &:hover {
                color: #2287FB;
            }
        }
    }
`

export default Contact;