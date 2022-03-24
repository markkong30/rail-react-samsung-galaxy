import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion/dist/framer-motion';
import logo from '@images/logo.svg';
import userIcon from '@images/user';
import { useSelector } from 'react-redux';
import { safeCredentials, handleErrors } from '@src/reusable/fetchHelper';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdown = useRef(null);
    const { userDetail } = useSelector(state => state.user);

    useEffect(() => {
        document.addEventListener('click', checkClickOutside)

        return () => {
            document.removeEventListener('click', checkClickOutside)
        }
    }, [isOpen])

    const checkClickOutside = e => {
        const outside = dropdown.current.contains(e.target);

        if (!outside) {
            setIsOpen(false);
            document.removeEventListener('click', checkClickOutside);

        }
    }

    const logOut = () => {
        fetch(`/api/logout`, safeCredentials({
            method: 'DELETE',
        }))
            .then(handleErrors)
            .then(data => {
                window.location.replace('/');
            })
    }


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
                <div className="dropdown" ref={dropdown}>
                    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
                        <img className='btn-toggle' src={userIcon} alt="" />
                        {userDetail && <span className='toggle-name' >{userDetail.username}</span>}
                    </div>
                    {isOpen &&
                        <ul className="items">
                            <li className="item">
                                <img src={userIcon} alt="" />
                                {userDetail ?
                                    <Link to="/user/orders">
                                        <span>{userDetail.username}</span>
                                    </Link>
                                    :
                                    <Link to="/user/login">
                                        <span>Log In / Sign Up</span>
                                    </Link>
                                }
                            </li>
                            <li className="item">
                                <Link to="/user/orders">
                                    <p>Orders</p>
                                </Link>
                            </li>
                            <li className="item">
                                <p>Contact Us</p>
                            </li>
                            {userDetail &&
                                <>
                                    <div className="line"></div>
                                    <li className="item" onClick={logOut}>
                                        <p>Log out</p>
                                    </li>
                                </>
                            }
                        </ul>
                    }

                </div>
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
    box-shadow: 0 0 15px rgba(40, 40, 40, 0.1);

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
                border: 1px solid #016AEA;
            }
     }

     .dropdown {
         margin-left: 1.5rem;
         cursor: pointer;
         position: relative;
         white-space: nowrap;
         
         .toggle {
             display: flex;
             align-items: flex-end;

            img {
                width: 25px;
                height: 25px;
            }

            .toggle-name {
                margin-left: 0.5rem;
                font-size: 0.9rem;
            }
         }
         

         .items {
             position: absolute;
             bottom: 0;
             right: 0;
             transform: translate(0, 100%);
             list-style: none;
             padding: 0.5rem 1rem;
             background: white;
             box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
             border-radius: 0.3rem;
             min-width: 150px;

             .item {
                 padding: 0.5rem 0;
                 font-size: 0.85rem;
                 font-weight: lighter;
                 display: flex;
                 align-items: center;

                 &:hover {
                     text-decoration: underline;
                 }
             }
             
             img {
             width: 20px;
             height: 20px;
             margin-right: 0.3rem;
            }

            .line {
                height: 1px;
                width: 100%;
                background: silver;
                margin: 0.5rem 0;
            }

         }
     }
`


export default Nav;