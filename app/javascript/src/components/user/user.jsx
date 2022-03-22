import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './login';
import Signup from './signup';
import { motion } from 'framer-motion/dist/framer-motion';
import { pageTransition } from '../../reusable/animation';
import { useParams } from 'react-router-dom';

const User = () => {
    const { status } = useParams();

    return (
        <StyledUser variants={pageTransition} initial="hidden" animate="show" exit="exit">
            {status == 'signup' && <Signup />}
            {status == 'login' && <Login />}

        </StyledUser>
    );
};

const StyledUser = styled(motion.div)`
`

export default User;