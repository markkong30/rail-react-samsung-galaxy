import React, { Suspense } from 'react';
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Phone from './Galaxy-phone';

const PhoneCanvas = () => {
    return (
        <StyledWrapper>

            <Canvas clasName="canvas">
                <OrbitControls enableZoom={false} enablePan={false} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 50, 0]} intensity={2} />
                <pointLight position={[0, 0, -10]} intensity={0.5} />
                <Suspense fallback={null}>
                    <Phone />
                </Suspense>
            </Canvas>
        </StyledWrapper>

    );
};

const StyledWrapper = styled.div`
    canvas {
        width: 50vw;
        height: 85vh;
        overflow: visible;
        cursor: pointer;
    }
`

export default PhoneCanvas;