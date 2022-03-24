import React, { useEffect, useRef, useState } from 'react';
import { safeCredentials, handleErrors } from '@src/reusable/fetchHelper';
import styled from 'styled-components';
import { gsap } from "gsap";
import { motion } from 'framer-motion/dist/framer-motion';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../redux/actions/authenticate';
import { updateURL } from '../../redux/actions/updateURL';


const LogIn = () => {
    const fields = ['Email', 'Password'];
    const form = useRef(null);
    const history = useHistory();
    const q = gsap.utils.selector(form);
    const dispatch = useDispatch();
    const { redirectURL } = useSelector(state => state.buy)

    const [isValid, setIsValid] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    })

    const inputFocus = (e) => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
        const start = "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
        const end = "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";
        const line = e.target.nextSibling.querySelector('.elastic-line');
        const name = e.target.name;
        if (!e.target.value) {
            tl.fromTo(line, { attr: { d: start } }, { attr: { d: end }, ease: "power2.out", duration: 0.75 });
            tl.to(line, { attr: { d: start }, ease: "elastic.out(3, 0.5)" }, "<50%");
            tl.to(q(`.placeholder.${name}`), { y: -25, scale: 0.7, duration: 0.5, transformOrigin: "top left", ease: "power2.out" }, "<15%");
        }

    }

    const inputBlur = (e) => {
        const name = e.target.name;

        if (!e.target.value) {
            gsap.to(q(`.placeholder.${name}`), { y: 0, scale: 1, duration: 1, ease: "power2.out" });
        }
    }

    const logInHandler = () => {
        console.log('here')
        fetch('/api/sessions', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: inputValues.email,
                    password: inputValues.password,
                },
            })
        }))
            .then(handleErrors)
            .then(data => {
                dispatch(authenticate());
                history.push(redirectURL);
                dispatch(updateURL('/'));
                // history.goBack();
            })
    }

    const submitValidate = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name.toLowerCase()]: value });
        const placeholders = form.current.querySelectorAll('input');
        for (const ele of placeholders) {
            if (ele.value == '') {
                return setIsValid(false)
            }
        }
        return setIsValid(true);

    }
    return (
        <StyledSignUp>
            <div className="details">
                <div className="header">
                    <h2 className="detail-title">Log in to your Samsung <br /> account</h2>
                </div>


                <form className="form" ref={form}>
                    {fields.map((ele, i) => (
                        <div className="input-container" key={i}>
                            <label className={`placeholder ${ele.split(' ')[0]}`}>{ele}</label>
                            <input type="text" name={ele.split(' ')[0]} autoComplete="off" className="input"
                                onFocus={inputFocus}
                                onBlur={inputBlur}
                                onChange={submitValidate}
                            />
                            <svg className="line-svg" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" strokeWidth="2" />
                            </svg>
                        </div>
                    ))}
                </form>
                <div className="submit">
                    {isValid ?
                        <motion.button className="btn-submit" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}
                            onClick={logInHandler}>Log in</motion.button>
                        :
                        <button className="btn-disable">Log in</button>
                    }
                    <h4 className="switch">Don't have an account?
                        <Link to="/user/signup">
                            <span className='signup'> Sign up here!</span>
                        </Link>
                    </h4>
                </div>
            </div>


        </StyledSignUp>
    );
};

const StyledSignUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(90vh - 10px);
    background: #F2F2F2;


    .details {
        background: white;
        margin: 3rem 0;
        padding: 5rem 10% ;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header {
            text-align: center;
            color: #0074D4;
            margin-bottom: 2rem;
            letter-spacing: 1.5px;

            h2 {
                font-size: 2rem;
            }

            p {
                margin-top: 0.3rem;
                font-size: 1.1rem;
                font-weight: lighter;
            }
        }
        

        .form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 1rem;
            width: 100%;



            .input-container {
                display: flex;
                flex-direction: column;
                position: relative;
                margin: 2rem 0;

                .placeholder {
                    font-size: 1.2rem;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    color: #757575;
                    pointer-events: none;
                    opacity: 0.7;
                }

                input {
                    width: 100%;
                    height: 2rem;
                    border: none;
                    outline: none;
                    color: grey;
                    font-size: 1.2rem;
                }

                svg {
                    transform: scale(1.4);
                    transform-origin: left;
                    position: absolute;
                    z-index: 1;
                    bottom: 0;
                    overflow: visible;
                }
            }
        }

        .submit {
            .btn-submit {
                margin-top: 2rem;
                padding: 1rem 0;
                width: 25rem;
                color: white;
                background: #0069E9;
                border-radius: 1rem;
            }   

            .btn-disable {
                margin-top: 2rem;
                padding: 1rem 0;
                width: 25rem;
                border-radius: 1rem;
                background: #BDBDBD;
                color: white;
                cursor: not-allowed;
            }

            .switch {
                margin: 2rem 0;
                font-weight: normal;

                h4 {
                    color: grey;
                }

                span {
                    color: #0074D4;
                    cursor: pointer;
                    margin-left: 0.5rem;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        
    }


`

export default LogIn;