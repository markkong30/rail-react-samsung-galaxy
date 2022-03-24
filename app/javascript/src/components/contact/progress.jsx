import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const Progress = () => {
    const { progress } = useSelector(state => state.buy);

    const progressBar = [
        { step: 1, label: 'Contact Details' },
        { step: 2, label: 'Payment' },
        { step: 3, label: 'Confirmation' },
    ]

    return (
        <StyledProgress>
            <div className="progress">
                {progressBar.map((ele, i) => (
                    <React.Fragment key={i}>
                        <div className="step">
                            <StyledNumber
                                content={ele.label}
                                labelColor={progress >= ele.step ? 'black' : 'grey'}
                                circleColor={progress >= ele.step ? '#1F89FF' : '#8F8F8F'}
                            >
                                {ele.step}
                            </StyledNumber>
                        </div>
                        {progressBar.length - 1 == i || <StyledLine color={progress > ele.step ? '#1F89FF' : '#BBBBBB'}></StyledLine>}
                    </React.Fragment>
                ))}
            </div>

        </StyledProgress>
    );
};

const StyledProgress = styled.div`
     .progress {
        padding: 3rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 1rem;         
        }

        
    }

`

const StyledNumber = styled.div`
    background: ${props => props.circleColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    height: 25px;
    width: 25px;
    font-size: 0.8rem;
    font-weight: bold;

    &::after {
        content: '${props => props.content}';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        color: ${props => props.labelColor};
        white-space: nowrap;
    }
`

const StyledLine = styled.div`
     height: 3px;
     border-radius: 1rem;
     opacity: 0.6;
     width: 20vw;
     background: ${props => props.color};
`

export default Progress;