import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <p>© 2022 Samsung Galaxy S22 Ultra Clone by Mark Kong.</p>
            </footer>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    footer {
        padding: 2rem;
        border-top: 1px solid #D9D9D9;

        p {
            font-size: 0.8rem;
            font-weight: lighter;
            
        }
    }
`

export default Footer;