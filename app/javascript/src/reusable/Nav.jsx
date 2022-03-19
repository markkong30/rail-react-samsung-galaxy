import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from 'framer-motion/dist/framer-motion';
import logo from '@images/logo.svg'


const Nav = () => {
    return (
        <Navbar>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="nav-links">
                <ul className="links">
                    <li className="nav-items">Offers</li>
                    <li className="nav-items">Specs</li>
                    <li className="nav-items">Explore</li>
                </ul>
                <Link to="/buy">
                    <button className="btn btn-buy">Buy now</button>
                </Link>
            </div>

        </Navbar>
    );
};

const Navbar = styled(motion.nav)`
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    .logo img {
        transform: scale(4.5) translateY(5%);
    }
    
    .nav-links {
        display: flex;
        flex-basis: 50%;
        justify-content: flex-end;
        align-items: center;
    }

    .links {
        list-style: none;
        display: flex;

        .nav-items {
            margin-left: 2rem;
        }
        
    }

    .btn-buy {
            margin-left: 2rem;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 1rem;
            cursor: pointer;
            background: linear-gradient(to right, white 50%, #016AEA 50%) right;
            background-size: 200%;
            color: white;
            transition: all 0.6s ease;


            &:hover {
                background-position: left;
                color: #016AEA;
            }
        }
`


export default Nav;