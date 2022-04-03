import React, { useEffect } from 'react';
import Intro from './intro';
import Table from './table';
import Slider from './slider';
import Pen from './pen';
import Colors from './colors';
import Display from './display';
import Buildings from './buildings';
import Durability from './durability';
import Video from './video';
import Zoom from './zoom';
import Privacy from './privacy';
import Experience from './experience';
import Accesories from './accesories';
import Links from './links';
import { motion } from 'framer-motion/dist/framer-motion';
import { homeTransition } from '../../reusable/animation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Home = () => {

    useEffect(() => {
        ScrollTrigger.refresh();
    })


    return (
        <motion.div variants={homeTransition} initial="hidden" animate="show" exit="exit" style={{ overflow: 'hidden' }}>
            <Intro />
            <Table />
            <Slider />
            <Pen />
            <Colors />
            <Display />
            <Buildings />
            <Durability />
            <Video />
            <Zoom />
            <Privacy />
            <Experience />
            <Accesories />
            <Links />
        </motion.div>
    );
};




export default Home;