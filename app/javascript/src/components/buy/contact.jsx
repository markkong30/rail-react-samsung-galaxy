import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';



const Contact = () => {
    return (
        <StyledContact>
            <div className="progress">
                <div className="step">
                    <div className="number one" >1</div>
                    {/* <label htmlFor="">Contact Details</label> */}
                </div>
                <div className="line"></div>
                <div className="step">
                    <div className="number two" >2</div>
                    {/* <label htmlFor="">Payment</label> */}
                </div>
            </div>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
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

            label {
                margin-top: 0.5rem;
                font-size: 0.8rem;
            }

        }

        .line {
            /* margin-top: 12.5px; */
            height: 1px;
            width: 30vw;
            background: #BBBBBB;
        }
    }
`

export default Contact;