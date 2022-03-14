import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import durability_1 from '@images/durability_1'
import durability_2 from '@images/durability_2'
import durability_3 from '@images/durability_3'
import water from '@images/water'
import adapter from '@images/adapter'
import Dropdown from './small_components/Dropdown';
import { motion } from 'framer-motion/dist/framer-motion';
import { fadeIn } from '../../reusable/animation';
import { waterTranslate } from '../../reusable/animation';


const Durability = () => {
    const dropdownDetails = [
        {
            id: '01', title: 'Corning® Gorilla® Glass Victus®+',
            content: 'The first smartphone to feature Corning® Gorilla® Glass Victus®+. The stunning front display and back panel are fitted with Corning® Gorilla® Glass Victus®+, which can better survive drops and offers tough scratch resistance.'
        },
        {
            id: '02', title: 'Armor Aluminum Frame',
            content: "Our strongest aluminum frame. From the interior structure to the polished exterior sides, each Galaxy S22 Ultra is supported by a super-strong Armor Aluminum frame. It's more durable and protects like a suit of armor."
        },
        {
            id: '03', title: 'IP68 Water Resistance',
            content: "Built to stand up to drips as well as drops. The IP68 rating means your phone and S Pen are made to resist water and dust, even if you're taking post-cardio notes or you get caught in the rain."
        }
    ]



    return (
        <StyledDurability>
            <motion.div className="adapter-container" variants={fadeIn} initial="hidden" whileInView="show" viewPort={{ once: true }}>
                <div className="image">
                    <img src={adapter} alt="" className="adapter" />
                </div>
                <div className="text">
                    <p className="grey">Better together</p>
                    <h3 className="title">45W Power Adapter</h3>
                    <p className="description">For quick power</p>
                </div>
            </motion.div>
            <div className="durability-container">
                <div className="images-container">
                    <div className="top">
                        <img src={durability_1} alt="" />
                        <img src={durability_2} alt="" />
                    </div>
                    <div className="bottom">
                        <img src={durability_3} alt="" />
                        <motion.img variants={waterTranslate} initial="hidden" whileInView="show" viewPort={{ once: true }}
                            className='water' src={water} alt="" />
                    </div>
                </div>
                <div className="text-container">
                    <h4 className="sub-heading">DURABILITY</h4>
                    <h3 className="title">Breaking news: <br />this is one tough Galaxy phone</h3>
                    <p className="description">
                        The polished Armor Aluminum frame acts like a suit of armor, and the front and rear are equipped with the tough Corning® Gorilla® Glass Victus®+. And both Galaxy S22 Ultra and S Pen are IP68 rated.
                    </p>
                    <div className="dropdown-list">
                        {dropdownDetails.map(ele => (
                            <div className="item" key={ele.id}>
                                <Dropdown title={ele.title} id={ele.id} content={ele.content} />
                            </div>
                        ))}


                    </div>
                </div>

            </div>

        </StyledDurability>
    );
};

const StyledDurability = styled.div`
    min-height: 100vh;
    background: black;
    color: white;
    position: relative;
    margin-top: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8% 18%;
    

    .adapter-container {
        /* position: relative; */
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        /* margin-top: 1100px; */

        .image {
            padding: 0 2rem;
            background: white;
            border-radius: 1rem;

            img {
                display: block;
                width: 80px;
                height: auto;
                object-fit: cover;
                /* object-position: center; */
            }
        }

        .grey {
            color: grey;
            font-size: 0.8rem;
        }

        .title {
            margin: 0.5em 0;
            font-size: 1.5rem;
        }
        
        .description {
            color: rgb(220, 220, 220);
        }
        
    }

    .durability-container {
        display: flex;
        align-items: flex-start;
        gap: 5rem;
        margin-top: 10rem;


        .images-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;

            .top {
                display: flex;
                width: 100%;
                flex: 1;
                gap: 1rem;
                margin-bottom: 1rem;

                img {
                    width: 50%;
                    height: 100%;
                    
                }
            }

            .bottom {
                width: 100%;
                position: relative;
                overflow: hidden;


                img {
                    width: 100%;
                    height: 100%;
                }

                .water {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        .text-container {
            width: 50%;
        }

        .dropdown-list {
            margin-top: 4rem;
        }
    }
    

`

export default Durability;