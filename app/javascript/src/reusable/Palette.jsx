import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Palette = ({ currentColor, setCurrentColor }) => {
    const { filteredPhones } = useSelector(state => state.phones);

    return (
        <StyledPalette>
            {filteredPhones && filteredPhones.map((phone, i) => (
                <StyledColor key={i} color={phone.color} className={currentColor == phone ? 'selected' : ''}>
                    <button
                        onClick={() => setCurrentColor(phone)}>
                    </button>
                    <label htmlFor="">{phone.title}</label>
                </StyledColor>
            ))}
        </StyledPalette>
    );
};


const StyledPalette = styled.div`
    display: flex;
    width: 50%;
    align-items: flex-start;
    text-align: center;
`

const StyledColor = styled.div`

    font-size: 0.8rem;
    font-weight: lighter;
    margin-right: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 25%;
    
    button {
        width: 30px;
        height: 30px;
        background: ${props => props.color};
        border-radius: 50%;
        margin-bottom: 0.5rem;
    }
    
    &.selected {
        button { 
            border: 2px solid #016AEA;
            box-shadow: 0 0 0 2px white inset;
        }

        label {
            font-weight: bold;
        }
    }

    
`

export default Palette;