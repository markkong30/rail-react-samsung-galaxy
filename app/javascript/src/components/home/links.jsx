import React from 'react';
import styled from 'styled-components';

const Links = () => {
    return (
        <StyledLinks>
            <div className="product item">
                <h4 className="list-title">Product &#38; Service</h4>
                <ul>
                    <li>Smartphones</li>
                    <li>Tablets</li>
                    <li>Galaxy Book</li>
                    <li>Watches</li>
                    <li>Audio</li>
                    <li>Accesories</li>
                    <li>Smart Home</li>
                    <li>Refrigerators</li>
                    <li>Washing Machines</li>
                </ul>
            </div>
            <div className="shop item">
                <h4 className="list-title">Shop</h4>
                <ul>
                    <li>Offers</li>
                    <li>Samsung Trade-in</li>
                    <li>ClubS</li>
                    <li>Store Pick Up and Support</li>
                    <li>Education Store</li>
                    <li>Samsung Experience Store</li>
                </ul>
            </div>
            <div className="support item">
                <h4 className="list-title">Support</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>Need Support</li>
                    <li>Live Chat</li>
                    <li>Email Support</li>
                    <li>Give Feedback</li>
                </ul>
            </div>
            <div className="sustain item">
                <h4 className="list-title">Sustainbility</h4>
                <ul>
                    <li>Overview</li>
                    <li>Environment</li>
                    <li>Coporate Citzenship</li>
                    <li>Digital Responsibility</li>
                </ul>
                <h4 className="list-title about">About Us</h4>
                <ul>
                    <li>Company Info</li>
                    <li>Business Area</li>
                    <li>Careers</li>
                    <li>Brand Identity</li>
                </ul>
            </div>
        </StyledLinks>
    );
};

const StyledLinks = styled.div`
    display: flex;
    width: 100%;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    overflow: hidden;


    .list-title {
        font-size: 1.1rem;
        padding-bottom: 1rem;
    }

    ul {
        list-style: none;

        li {
            font-size: 0.9rem;
            font-weight: lighter;
            padding: 0.3rem;
        }
    }

    .item {
        flex: 1;
        padding: 2rem;
        border: 1px solid #D9D9D9;
        margin:0 -1px -1px 0;
    }

    .about {
        padding-top: 2rem;
    }
`

export default Links;