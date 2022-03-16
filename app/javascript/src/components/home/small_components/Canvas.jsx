import React, { Suspense } from 'react';
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Phone from './Galaxy-phone';

const GalaxyModel = () => {
    return (
        <StyledWrapper>

            <Canvas clasName="canvas">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[2, 10, 1]} intensity={2} />
                <pointLight position={[0, 1, -10]} />
                <Suspense fallback={null}>
                    <Phone />
                </Suspense>
            </Canvas>
        </StyledWrapper>

    );
};

const StyledWrapper = styled.div`
    canvas {
        height: 100vh;
    }
`

export default GalaxyModel;