import React, { useEffect } from 'react';
import Intro from './intro';
import Table from './table';
import Slider from '../slider';
import Pen from './pen';
import Colors from './colors';
import Display from './display';
import Buildings from './buildings';
import Durability from './durability';
import Video from './video';
import styled from 'styled-components';
import Zoom from './zoom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Home = () => {

    useEffect(() => {
        ScrollTrigger.refresh();
    })

    return (
        <div>
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
        </div>
    );
};




export default Home;